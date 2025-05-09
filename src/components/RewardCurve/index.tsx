import { useRef, useEffect, useMemo, useState } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ScatterController,
} from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import { Chart } from 'react-chartjs-2';
import { getTotalIssuance, getEraStaked } from '../../utils/chainQueries';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ScatterController,
  annotationPlugin
);

const CHART_ASPECT_RATIO = 1.6;

interface StakingMetrics {
  apr: number;
  inflation: number;
  apy: number;
}

// helper function to calculate rewards
const calculateInflationAndRates = (
  percentStaked: number,
  totalIssuance: number
): StakingMetrics => {
  // Inflation and reward data based on formula:
  // Inflation(x) = I0 + (I_ideal - I0) * x / x_ideal  for 0 < x <= x_ideal
  //              = I0 + (I_ideal - I0) * 2 ^((x_ideal-x)/d) for x_ideal < x <= 1
  // Where:
  // x = ratio of staked tokens to token supply,
  // Inflation(x) = Annual inflation rate at staking ratio x,
  // I0 = limit of inflation at x=0 = 0.025 = 2.5%,
  // x_ideal = position of "ideal" staking ratio = 0.7 = 70%,
  // I_ideal = ideal inflation at x_ideal = 0.14 = 14% (maximum inflation),
  // d = decay rate for staking ratio > x_ideal = 0.05 = 5%,
  //
  // Reward(x) = Inflation(x) / x
  // Where:
  // Reward(x) = Annual reward rate at staking ratio x
  const xIdeal = 70; // Ideal Staked Percent of total supply.
  const iIdeal = 14; // Inflation at ideal staked percent.
  const iZero = 2.5; // Inflation at staked percent = 0%.
  const decay = 5; // decay for staked percent greater than the ideal
  const fixedYearlyReward = 140_000_000;

  const calculatedInflation =
    percentStaked <= xIdeal
      ? iZero + (iIdeal - iZero) * (percentStaked / xIdeal)
      : iZero + (iIdeal - iZero) * 2 ** ((xIdeal - percentStaked) / decay);

  const maxInflation = (100 * fixedYearlyReward) / totalIssuance;
  const inflation = Math.min(calculatedInflation, maxInflation);

  const apr = 100 * (inflation / percentStaked);
  const apy = 100 * ((1 + inflation / percentStaked / 365) ** 365 - 1);

  return { apr, inflation, apy };
};

const RewardCurve = () => {
  const { colorMode } = useColorMode();
  const chartRef = useRef<ChartJS>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);
  const [totalIssuance, setTotalIssuance] = useState<number | null>(null);
  const [currentStaked, setCurrentStaked] = useState<number | null>(null);

  // Helper function to calculate percent staked
  const calculatePercentStaked = (
    currentStaked: number,
    totalIssuance: number
  ) => {
    return (currentStaked / totalIssuance) * 100;
  };

  useEffect(() => {
    const fetchChainData = async () => {
      try {
        const issuance = await getTotalIssuance();
        const staked = await getEraStaked();

        if (mountedRef.current) {
          setTotalIssuance(issuance);
          setCurrentStaked(staked);
        }
      } catch (error) {
        console.error('Failed to fetch chain data:', error);
      }
    };

    fetchChainData();
  }, []);

  // Effect for tracking mounted state
  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  // Generate curves
  const { inflationCurve, rewardCurve, apyRewardCurve } = useMemo(() => {
    if (!totalIssuance) {
      return { inflationCurve: [], rewardCurve: [], apyRewardCurve: [] };
    }

    const inflationCurve: { x: number; y: number }[] = [];
    const rewardCurve: { x: number; y: number }[] = [];
    const apyRewardCurve: { x: number; y: number }[] = [];

    const stepSize = 0.2;

    for (
      let percentStaked = 0;
      percentStaked <= 100;
      percentStaked += stepSize
    ) {
      const { inflation, apr, apy } = calculateInflationAndRates(
        percentStaked,
        totalIssuance
      );
      inflationCurve.push({ x: percentStaked, y: inflation });
      rewardCurve.push({ x: percentStaked, y: apr });
      apyRewardCurve.push({ x: percentStaked, y: apy });
    }

    return { inflationCurve, rewardCurve, apyRewardCurve };
  }, [totalIssuance]);

  // Set the chart options including annotation.
  const chartOptions = useMemo(() => {
    const percentTotalStaked =
      totalIssuance && currentStaked
        ? calculatePercentStaked(currentStaked, totalIssuance)
        : 0;

    const noteContent: string[] =
      totalIssuance && currentStaked
        ? [
            `Total Supply: ${totalIssuance.toLocaleString()} POLYX`,
            `Total Staked: ${currentStaked.toLocaleString()} POLYX`,
            `Percentage Staked: ${percentTotalStaked.toFixed(3)}%`,
          ]
        : ['Loading...'];

    const { apr, inflation, apy } = calculateInflationAndRates(
      (currentStaked / totalIssuance) * 100,
      totalIssuance
    );
    const isDarkTheme = colorMode === 'dark';
    const textColor = isDarkTheme ? '#e3e3e3' : '#666666';
    const gridColor = isDarkTheme ? '#444444' : '#e3e3e3';

    const options: ChartOptions<'scatter'> = {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: CHART_ASPECT_RATIO,
      showLine: true,
      animation: {
        duration: 100,
      },
      scales: {
        x: {
          title: {
            display: true,
            text: `Percent of Total POLYX Staked`,
            color: textColor,
            font: (context) => {
              if ('chart' in context) {
                const chart = context.chart as ChartJS;
                return {
                  size: 14 * (chart.width / 958),
                };
              }
              return {
                size: 14,
              };
            },
          },
          ticks: {
            callback: function (value) {
              return value + '%';
            },
            color: textColor,
            font: (context) => ({
              size: 14 * (context.chart.width / 958),
            }),
          },
          grid: {
            color: gridColor,
          },
        },
        y: {
          max: 50,
          ticks: {
            callback: function (value) {
              return value + '%';
            },
            color: textColor,
            font: (context) => ({
              size: 14 * (context.chart.width / 958),
            }),
          },
          grid: {
            color: gridColor,
          },
        },
      },
      hover: {
        mode: 'point' as const,
      },
      elements: { point: { hoverRadius: 0 } },
      plugins: {
        title: {
          display: true,
          text: `Polymesh Staking Reward / Inflation Curve`,
          padding: 0,
          color: textColor,
          font: (context) => {
            if ('chart' in context) {
              return {
                size: 18 * (context.chart.width / 958),
              };
            }
            return {
              size: 18,
            };
          },
        },
        legend: {
          display: true,
          position: 'top' as const,
          labels: {
            usePointStyle: true,
            pointStyle: 'line',
            padding: 10,
            color: textColor,
            font: (context) => ({
              size: 14 * (context.chart.width / 958),
            }),
          },
        },
        tooltip: {
          enabled: true,
          mode: 'nearest',
          intersect: false,
          callbacks: {
            label: (context) => {
              return `${context.dataset.label}: ${context.parsed.y.toFixed(
                2
              )}%`;
            },
          },
          backgroundColor: isDarkTheme ? '#1a1a1a' : 'rgba(255, 255, 255, 0.9)',
          titleColor: textColor,
          bodyColor: textColor,
          borderColor: gridColor,
          borderWidth: 1,
          titleFont: (context) => ({
            size: 14 * (context.chart.width / 958),
          }),
          bodyFont: (context) => ({
            size: 12 * (context.chart.width / 958),
          }),
        },
        annotation: {
          annotations: {
            ...(apy &&
              apr &&
              inflation && {
                line1: {
                  type: 'line',
                  yMin: 0,
                  yMax: apy,
                  xMin: percentTotalStaked,
                  xMax: percentTotalStaked,
                  borderColor: '#170087',
                  borderWidth: 1,
                  borderDash: [5, 5],
                  label: {
                    position: '20%',
                    backgroundColor: '#170087',
                    content: `${percentTotalStaked.toFixed(3)} %`,
                    display: true,
                    font: (context) => ({
                      size: 14 * (context.chart.width / 958),
                    }),
                    padding: 5,
                  },
                },
                point1: {
                  type: 'point',
                  xValue: percentTotalStaked,
                  yValue: inflation,
                  radius: 3,
                  borderColor: '#EC4673',
                  backgroundColor: '#EC4673',
                  borderWidth: 1,
                },
                point2: {
                  type: 'point',
                  xValue: percentTotalStaked,
                  yValue: apr,
                  radius: 3,
                  borderColor: '#D557EA',
                  backgroundColor: '#D557EA',
                  borderWidth: 1,
                },
                point3: {
                  type: 'point',
                  xValue: percentTotalStaked,
                  yValue: apy,
                  radius: 3,
                  borderColor: '#60D3CB',
                  backgroundColor: '#60D3CB',
                  borderWidth: 1,
                },
                line2: {
                  type: 'line',
                  yMin: apr,
                  yMax: apr,
                  xMin: 0,
                  xMax: percentTotalStaked,
                  borderColor: '#D557EA',
                  borderWidth: 1,
                  borderDash: [5, 5],
                  label: {
                    position: '50%',
                    backgroundColor: '#D557EA',
                    content: `${apr.toFixed(3)} %`,
                    display: true,
                    font: (context) => ({
                      size: 14 * (context.chart.width / 958),
                    }),
                    padding: 5,
                  },
                },
                line3: {
                  type: 'line',
                  yMin: inflation,
                  yMax: inflation,
                  xMin: 0,
                  xMax: percentTotalStaked,
                  borderColor: '#EC4673',
                  borderWidth: 1,
                  borderDash: [5, 5],
                  label: {
                    position: '20%',
                    backgroundColor: '#EC4673',
                    content: `${inflation.toFixed(3)} %`,
                    display: true,
                    font: (context) => ({
                      size: 14 * (context.chart.width / 958),
                    }),
                    padding: 5,
                  },
                },
                line4: {
                  type: 'line',
                  yMin: apy,
                  yMax: apy,
                  xMin: 0,
                  xMax: percentTotalStaked,
                  borderColor: '#60D3CB',
                  borderWidth: 1,
                  borderDash: [5, 5],
                  label: {
                    position: '20%',
                    backgroundColor: '#60D3CB',
                    content: `${apy.toFixed(3)} %`,
                    display: true,
                    font: (context) => ({
                      size: 14 * (context.chart.width / 958),
                    }),
                    padding: 5,
                  },
                },
              }),
            label1: {
              type: 'label',
              position: { x: 'end', y: 'start' },
              xValue: 100,
              yValue: 50,
              content: noteContent,
              textAlign: 'right',
              color: textColor,
              font: (context) => ({
                size: 14 * (context.chart.width / 958),
              }),
            },
          },
        },
      },
    };

    return options;
  }, [totalIssuance, currentStaked, colorMode]);

  // Set chart data.
  const chartData = useMemo(() => {
    return {
      datasets: [
        {
          label: 'APY',
          data: apyRewardCurve,
          borderColor: '#60D3CB',
          backgroundColor: '#60D3CB',
          borderWidth: 1,
          pointRadius: 0,
          yAxisID: 'y',
        },
        {
          label: 'APR',
          data: rewardCurve,
          borderColor: '#D557EA',
          backgroundColor: '#D557EA',
          borderWidth: 1,
          pointRadius: 0,
          yAxisID: 'y',
        },
        {
          label: 'Inflation',
          data: inflationCurve,
          borderColor: '#EC4673',
          backgroundColor: '#EC4673',
          borderWidth: 1,
          pointRadius: 0,
          yAxisID: 'y',
        },
      ],
    };
  }, [apyRewardCurve, rewardCurve, inflationCurve]);

  return (
    <div
      ref={containerRef}
      className="LineChart"
      style={{
        width: '100%',
        maxWidth: '1200px',
        aspectRatio: CHART_ASPECT_RATIO,
        margin: '0 auto',
      }}
    >
      {chartData && chartOptions ? (
        <Chart
          ref={chartRef}
          type="scatter"
          options={chartOptions}
          data={chartData}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default RewardCurve;
