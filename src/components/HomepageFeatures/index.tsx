import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  pngPath?: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Welcome to Polymesh',
    Svg: require('@site/static/img/polymesh-symbol.svg').default,
    description: (
      <>
        Discover the secure, purpose-built blockchain for regulated assets.
        Explore how Polymesh is reshaping the financial industry with
        unparalleled compliance and governance features.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    pngPath: require('@site/static/img/pillars_200x200.png').default,
    description: (
      <>
        Learn about the unique features that set Polymesh apart from other
        blockchains. From identity management to customizable compliance rules,
        Polymesh offers a suite of tools for businesses looking to issue and
        manage regulated assets.
      </>
    ),
  },
  {
    title: 'Getting Started with Polymesh',
    pngPath: require('@site/static/img/getting-started_200x200.png').default,
    description: (
      <>
        Ready to start building on Polymesh? Get started with our developer
        resources and community forums. Connect with like-minded individuals and
        stay up-to-date on the latest developments in the world of regulated
        assets.
      </>
    ),
  },
];

function Feature({ title, Svg, pngPath, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? (
          <Svg className={styles.featureImg} role="img" />
        ) : (
          <img className={styles.featureImg} src={pngPath} alt={title} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
