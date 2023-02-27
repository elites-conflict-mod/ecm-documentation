// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Elite's Conflict Mod Documentation",
	tagline:
		"Official documentation website for Elite's Conflict Mod - a mod for Star Wars: Empire At War: Forces of Corruption.",
	url: 'https://ecm-documentation.netlify.app',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico', 
	trailingSlash: false,

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Elite's Conflict Mod",
				logo: {
					alt: 'ECM Logo',
					src: 'img/ecm-logo.png',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'right',
						label: 'Docs',
					},
					{ to: '/blog', label: 'Blog', position: 'right' },
					{
						href: 'https://github.com/elites-conflict-mod/ecm-documentation',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			announcementBar: {
				id: 'announcement-bar',
				content:
					'Welcome to our brand-new documentation site for ECM! Read the blog post <a rel="noopener noreferrer" href="/blog/welcome">here</a>',
				backgroundColor: '#FFF',
				textColor: '#000',
				isCloseable: true,
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Docs',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Steam',
								href: 'https://steamcommunity.com/sharedfiles/filedetails/?id=1125611680',
							},
							{
								label: 'ModDB',
								href: 'https://www.moddb.com/mods/elites-conflict-mod',
							},
							{
								label: 'Discord',
								href: 'https://discord.gg/NVmBEfn',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/elites-conflict-mod/',
							},
						],
					},
				],
				copyright: `HEROIC STUDIOS | 2016-2023 | Built with <a href="https://docusaurus.io" target="_blank" rel="noopener">Docusaurus</a>.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	plugins: [
		[
			'@docusaurus/plugin-pwa',
			{
				debug: true,
				offlineModeActivationStrategies: ['standalone'],
				pwaHead: [
					{
						tagName: 'link',
						rel: 'icon',
						href: '/img/ecm-icon.png',
					},
					{
						tagName: 'link',
						rel: 'manifest',
						href: '/manifest.json', // your PWA manifest
					},
					{
						tagName: 'meta',
						name: 'theme-color',
						content: 'rgb(37, 194, 160)',
					},
				],
			},
		],
	],
};

module.exports = config;
