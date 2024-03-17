import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightBlog({
				authors: {
					elite: {
						name: 'elite',
						title: 'Maintainer/Developer of Elite\'s Conflict Mod',
						url: 'https://github.com/elite',
						picture: 'https://github.com/elite.png',
					},
					cnkommander: {
						name: 'cnkommander',
						title: 'Lead Developer of Elite\'s Conflict Mod',
						url: 'https://github.com/cnkommander',
						picture: 'https://github.com/cnkommander.png',
					},
					sanick2: {
						name: 'sanick2',
						title: 'Art Assets Contributor',
						url: 'https://github.com/sanick2',
						picture: 'https://github.com/sanick2.png',
					},
				},
			})],
			title: 'ECM Documentation',
			logo: {
				src: './src/assets/ecm-logo.png',
				alt: 'ECM Logo',
				replacesTitle: true,
			},
			favicon: './favicon.ico',
			social: {
				github: 'https://github.com/elites-conflict-mod/elites-conflict-mod',
				discord: 'https://discord.gg/NVmBEfn',
			},
			sidebar: [
				{
					label: 'Intro',
					link: '/',
				},
				{
					label: 'Guides',
					badge: { text: 'work in progress', variant: 'note' }, // 'work in progress'
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: 'Galactic Conquests',
							link: '/guides/conquests/',
						},
						{
							label: 'Faction Guides: CSA',
							link: '/guides/csa/',
						},
						{
							label: 'Faction Guides: Empire',
							link: '/guides/empire/',
						},
						{
							label: 'Faction Guides: Rebels',
							link: '/guides/rebels/',
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
					icon: 'external',
					attrs: { target: '_blank', rel: 'noopener', title: 'ModDB' },
				},
			],
		}),
	],
});
