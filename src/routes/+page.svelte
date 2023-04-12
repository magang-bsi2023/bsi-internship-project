<script>
	import { Heading, Button, P, Input, Label, ButtonGroup, InputAddon } from 'flowbite-svelte';
	import logo from '$lib/assets/logo/bsilib.svg';
	export let data;
</script>

<div class="flex flex-col p-5 text-center my-5">
	<img src={logo} class="h-32 mb-3" alt="{data.page.title} Logo" />
	<Heading tag="h1" customSize="text-4xl font-semibold" color="text-bsiyellow">
		{data.page.title}
	</Heading>
	<P class="mx-auto mt-2 italic">{data.page.tagline}</P>
</div>

<div class="my-5">
	<form method="GET" action="/buku">
		<ButtonGroup class="w-full">
		<InputAddon><svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg></InputAddon>
		<Input size="lg" type="search" name="q" placeholder="Cari buku..."
		defaultClass="block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-bsigreen focus:ring-bsigreen dark:focus:border-bsigreen dark:focus:ring-bsigreen bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-4 sm:text-base size first:rounded-l-lg last:rounded-r-lg border-l-0 first:border-l last:border-r"/>
		<Button type="submit" color="" class="bg-bsigreen text-white hover:bg-bsidgreen">
			Cari
		</Button>
		</ButtonGroup>
	</form>
</div>

<div class="flex flex-col items-center">
	<P class="mb-5">atau</P>
	<Button pill size="lg" href="/buku" color="" class="mx-auto border-2 border-bsigreen bg-bsigreen hover:bg-bsidgreen hover:border-bsiyellow text-white">
		Lihat Daftar Buku
	</Button>
</div>