<script>
	import { Heading, Accordion, AccordionItem, Button } from 'flowbite-svelte';
	import logo from '$lib/assets/logo/bsilib.svg';
	export let data;
</script>

<div class="flex flex-col p-5 text-center my-5">
	<img src={logo} class="h-32 mb-3" alt="{data.page.title} Logo" />
	<Heading tag="h1" customSize="text-4xl font-semibold" color="text-bsiyellow" class="mb-5">
		{data.page.title}
	</Heading>
	<!-- <P class="dark:text-gray-400 text-center capitalize">{data.page.tagline}</P> -->
</div>

<div class="flex">
	<Button href="/buku" color="bg-bsigreen" class="mx-auto bg-bsigreen">
		Daftar Buku
	</Button>
</div>