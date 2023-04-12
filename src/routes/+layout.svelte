<script>
	import '../app.postcss';
	import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Footer, FooterLinkGroup, FooterLink, FooterCopyright, ImagePlaceholder, Skeleton, TextPlaceholder } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo/bsilib.svg';
	import HeadPageTitle from '$lib/utils/HeadPageTitle.svelte'
	export let data;

	function getLinkLists() {
		const modules = import.meta.glob("$buku/**/**.svelte");
		let linkLists = [];
		for (let path in modules) {
			let pathSanitized = path.replace("/+page.svelte", "").replace("/src/routes/", "/");
			linkLists.push(pathSanitized);
		}
		return linkLists.slice(1);
	}
</script>

<HeadPageTitle></HeadPageTitle> <!-- Page <title/> -->

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src={logo} class="mr-3 h-6 sm:h-10" alt="BSI Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold text-bsiyellow font-heading">
			{data.page.title}
		</span>
	</NavBrand>
	<div class="flex md:order-2">
		<DarkMode />
		<NavHamburger on:click={toggle} />
	</div>
	<NavUl
		{hidden}
		ulClass="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium"
		activeClass="text-white font-bold bg-bsigreen md:bg-transparent md:text-bsigreen md:dark:text-bsigreen dark:bg-bsigreen md:dark:bg-transparent"
		nonActiveClass="text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
	>
		<NavLi active={$page.url.pathname == '/'} href="/">Home</NavLi>
		<!-- <NavLi active={getLinkLists().includes($page.url.pathname)} href="/buku">Buku</NavLi> -->
		<NavLi active={$page.url.pathname == '/buku'} href="/buku">Buku</NavLi>
		<NavLi active={$page.url.pathname == '/tentang'} href="/tentang">Tentang</NavLi>
	</NavUl>
</Navbar>

<div class="container mx-auto px-3 sm:px-0 py-2.5 w-full">
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


<style global lang="postcss">
	h1, h2, h3, h3, h4, h5, h6 {
		font-family: 'lato', 'sans-serif';
	}
</style>