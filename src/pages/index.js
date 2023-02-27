import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <div className="row">
            <div className="col col--6">
              <Link
              className="button button--primary button--lg"
              to="/docs/intro">
              Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
		<Layout title={`${siteConfig.title}`} description={`${siteConfig.tagline}`}>
			<HomepageHeader />
			<main>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='text--center'>
                <h1>Play as the...</h1>
              </div>   
            </div>
          </div>
        </div>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
