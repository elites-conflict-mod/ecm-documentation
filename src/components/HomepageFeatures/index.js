import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const FeatureList = [
	{
		title: 'Rebel Alliance',
		Svg: require('@site/static/img/rebel.svg').default,
		description: (
			<>
				The Alliance to Restore the Republic (2 BBY–4 ABY), commonly known as
				the Rebel Alliance, Alliance, the Rebellion, and rarely the Separatists,
				was a resistance movement formed by Bail Prestor Organa and Mon Mothma
				to oppose the reign of the Galactic Empire. The Alliance was formed from
				a less organized movement to oppose the Empire that existed, which was
				secretly led by Organa. This early group came together from a number of
				rebel cells, including the crew of the Ghost and the Phoenix Cell. The
				Atrivis Resistance Group was one of the first cells to join what Mothma
				began calling "the Alliance" before the formal formation of the Alliance
				to Restore the Republic. The Alliance was publicly and formally declared
				with the Declaration of the Rebel Alliance.
			</>
		),
	},
	{
		title: 'Galactic Empire',
		Svg: require('@site/static/img/empire.svg').default,
		description: (
			<>
				The Galactic Empire, also known as the First Galactic Empire,
				Palpatine's New Order, the Imperium or simply the Empire and later the
				Old Empire, was the galactic government established by Supreme
				Chancellor Palpatine to replace the Galactic Republic in 19 BBY and
				bring Sith rule to the galaxy.
			</>
		),
	},
	{
		title: 'Corporate Sector Authority',
		Svg: require('@site/static/img/image-solid.svg').default,
		description: (
			<>
				<span class="badge badge--secondary">Work In Progress</span>
				<br />
				The Corporate Sector Authority, commonly abbreviated to CSA, was a
				political conglomerate that controlled the Corporate Sector, which was
				located in the galaxy Outer Rim Territories. All economic, political and
				judicial systems were controlled by member corporations or corporate
				interest, who were charted to directly administer the sector.
			</>
		),
	},
];

function Feature({Svg, title, description}) {
  return (
		<div className={clsx('col col--4')}>
			<div className="text--center">
				<Svg className={styles.featureSvg} role="img" />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
				<Link
					className="button button--secondary"
					to={'./docs/category/guides'}
				>
					Faction Guide
				</Link>
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
