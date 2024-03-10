import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'ECM Documentation',
			logo: {
				src: './src/assets/ecm-logo.png',
				alt: 'ECM Logo',
				replacesTitle: true,
			},
			favicon: './favicon.ico',
			social: {
				github: 'https://github.com/elites-conflict-mod/elites-conflict-mod',
				discord: 'https://astro.build/chat',
			},
			sidebar: [
				{
					label: 'Intro',
					link: '/',
				},
				{
					label: 'Guides', badge: { text: 'work in progress', variant: 'note' }, // 'work in progress'
					items: [
						// Each item here is one entry in the navigation menu.
						{ 
							label: 'Galactic Conquests', 
							link: '/guides/conquests/' 
						},
						{ 
							label: 'Faction Guides: CSA', 
							link: '/guides/csa/',
							
						},
						{ 
							label: 'Faction Guides: Empire', 
							link: '/guides/empire/' 
						},
						{ 
							label: 'Faction Guides: Rebels', 
							link: '/guides/rebels/' 
						},
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				{
					label: 'ModDB',
					link: 'https://moddb.com/mods/elites-conflict-mod',
					attrs: { target: '_blank', rel: 'noopener', title: 'ModDB' },
				},
			],
		}),
	],
});
