<script>
	import '../app.postcss';
	import { DarkMode } from 'flowbite-svelte';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { Footer, FooterLinkGroup, FooterLink, FooterCopyright } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import logo from '$lib/logo.svg';
	import PageTitle from '$lib/utils/PageTitle.svelte'
</script>

<PageTitle></PageTitle> <!-- Page <title/> -->

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src={logo} class="mr-3 h-6 sm:h-9" alt="Sharia Banking Learn Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
			Sharia Banking Learn
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		<DarkMode />
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl
		{hidden}
		activeClass="text-white font-bold bg-green-700 md:bg-transparent md:text-green-600 md:dark:text-green-500 dark:bg-green-600 md:dark:bg-transparent"
		nonActiveClass="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
	>
		<NavLi active={$page.url.pathname == '/'} href="/">Home</NavLi>
		<NavLi active={$page.url.pathname == '/materi'} href="/materi">Materi</NavLi>
		<NavLi active={$page.url.pathname == '/tentang'} href="/tentang">Tentang</NavLi>
	</NavUl>
</Navbar>

<div class="container mx-auto px-2 sm:px-4 py-2.5 w-full">
	<slot />
</div>

<Footer class="dark:bg-gray-900 mt-auto">
	<FooterCopyright href="/" by="August" year={2023} />
	<FooterLinkGroup
		ulClass="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
	>
		<FooterLink href="/tentang">Tentang</FooterLink>
		<FooterLink href="/kontak">Kontak</FooterLink>
	</FooterLinkGroup>
</Footer>
