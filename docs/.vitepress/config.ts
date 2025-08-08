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
		sidebar: {

		},
		footer: {
			copyright: 'Z# — Open Source • MIT License',
		},
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/renderlabs-cloud/zsharp' },
			{ icon: 'discord', link: 'https://discord.gg/gGcbaBjtBS' }, // TODO: use redirect link
		],
		search: {
			provider: 'local',	
		},
		docFooter: {
			prev: 'Previous',
			next: 'Next'
		},
	},
	markdown: {
		theme: {
			dark: 'catppuccin-frappe',
			light: 'catppuccin-macchiato'
		},
		lineNumbers: true,
	},
	ignoreDeadLinks: true
});