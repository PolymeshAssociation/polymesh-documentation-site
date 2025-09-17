import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import OverviewBox from '/src/components/OverviewBox';
import OverviewVideoBox from '/src/components/OverviewVideoBox';
import YoutubePlayer from '/src/components/YoutubePlayer';
import ActionCard from '/src/components/ActionCard';
import ActionCardWrapper from '/src/components/ActionCard/ActionCardWrapper';
import RewardCurve from '/src/components/RewardCurve';
import ZoomableMermaid from '../components/ZoomableMermaid';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Make components available globally without import statements
  // Map the e.g. "OverviewBox" tag to our <OverviewBox /> component!
  // `OverviewBox` will receive all props that were passed to `OverviewBox` in MDX
  Tabs,
  TabItem,
  OverviewBox,
  OverviewVideoBox,
  YoutubePlayer,
  ActionCard,
  ActionCardWrapper,
  RewardCurve,
  ZoomableMermaid,
};
