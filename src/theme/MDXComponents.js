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

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "highlight" tag to our <Highlight /> component!
  // `Highlight` will receive all props that were passed to `highlight` in MDX
  Tabs,
  TabItem,
  OverviewBox,
  OverviewVideoBox,
  YoutubePlayer,
  ActionCard,
  ActionCardWrapper,
};
