import { ApiPromise, WsProvider } from '@polkadot/api';

const RPC_ENDPOINT = 'wss://rpc.polymesh.network';

let api: ApiPromise | null = null;

async function getApi(): Promise<ApiPromise> {
  if (!api) {
    const provider = new WsProvider(RPC_ENDPOINT);
    api = await ApiPromise.create({ provider, noInitWarn: true });
  }
  return api;
}

export async function getTotalIssuance(): Promise<number> {
  const api = await getApi();
  const totalIssuance = await api.query.balances.totalIssuance();

  return Number(totalIssuance.toString()) / 1_000_000; // Convert from smallest unit to POLYX
}

export async function getEraStaked(): Promise<number> {
  const api = await getApi();
  const currentEra = await api.query.staking.currentEra();

  const eraStaked = await api.query.staking.erasTotalStake(
    currentEra.toString()
  );

  return Number(eraStaked.toString()) / 1_000_000; // Convert from smallest unit to POLYX
}
