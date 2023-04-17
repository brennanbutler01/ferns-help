import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Notifications of Operations',
    description: (
      <>
          You must notify the department before starting a forest operation. You must do this at least 15 days before starting the work. For helicopter pesticide applications, you may need to do this 30 days before starting the work. Information about the intent to harvest timber will be shared with the Department of Revenue.
      </>
    ),
      learnMore: 'http://www.oregon.gov/ODF/Working/Pages/FPA.aspx'
  },
  {
    title: 'Permit to Use Fire or Power-Driven Machinery (PDM)',
    description: (
      <>You need to apply for this permit for any operation that uses fire or power-driven machinery.</>
    ),
      learnMore: 'http://www.oregonlaws.org/ors/477.625'
  },
  {
    title: 'Subscriptions and Registrations',
    description: (
      <>
          Subscribe to get information about forest operations. Register to get information about planned helicopter pesticide use within one mile of your home or surface water intake.
      </>
    ),
      learnMore: 'http://www.oregonlaws.org/ors/477.625'
  },
];

function Feature({learnMore, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
          <div><a href={learnMore}>Learn More </a></div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
