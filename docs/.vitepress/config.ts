import { defineConfig } from 'vitepress';

export default defineConfig({
	title: 'Z# Language',
	description: 'Documentation for the Z# programming language',
	lang: 'en-US',
	head: [
		['link', { rel: 'icon', type: 'image/svg+xml', href: '/assets/svg/logo.svg' }]
	],
	themeConfig: {
		logo: '/assets/svg/logo.svg',
		siteTitle: 'Z# Language',
		nav: [],
		sidebar: {},
		footer: {
			copyright: 'Public Domain',
			message: 'Z# Language'
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/zsharp/zsharp' },
			{ icon: 'discord', link: 'https://discord.gg/gGcbaBjtBS' },
		],
		search: {
			provider: 'local',	
		},
		
	},
	ignoreDeadLinks: true
});