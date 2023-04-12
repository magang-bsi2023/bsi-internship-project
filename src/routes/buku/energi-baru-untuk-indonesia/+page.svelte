<script>
	import { Heading, P, Button } from "flowbite-svelte";
	import { page } from "$app/stores";
	import PageTitle from "$lib/utils/PageTitle.svelte";
	import PageNav from '$lib/components/PageNav.svelte'

</script>

<div class="flex flex-col">
	<Heading class="font-bold w-fit whitespace-nowrap mb-10 mx-auto" tag="h1" customSize="text-3xl" color="text-bsigreen">
		<PageTitle></PageTitle>
	</Heading>
	
	<div class="flex flex-col mb-10">
		<Heading class="font-bold w-fit whitespace-nowrap mb-3 mx-auto" tag="h2" customSize="text-2xl" color="text-bsigreen">
			Penyusun
		</Heading>

		<div class="flex justify-evenly mb-10">
			<div>
				<Heading class="font-extrabold w-fit whitespace-nowrap mx-auto" tag="h3" customSize="text-lg">
					Komaruddin Hidayat
				</Heading>
				<P class="text-center">
					Komisaris Independen
				</P>
			</div>
			<div>
				<Heading class="font-extrabold w-fit whitespace-nowrap mx-auto" tag="h3" customSize="text-lg">
					Rosma Handayani
				</Heading>
				<P class="text-center">
					Komisaris Independen
				</P>
			</div>
		</div>

		<P class="text-center">PT. Bank Syariah Indonesia, Tbk.<br>Gedung The Tower Jl. Gatot Subroto No. 27 Jakarta Selatan (12930) Indonesia</P>

	</div>

	
	<div class="md:hidden flex">
		<Button href="{$page.url.pathname}/1.1.-barter-dan-uang"
		btnClass="text-center mx-auto font-bold focus:ring-4 focus:outline-none inline-flex items-center justify-center px-5 py-2.5 text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-lg font-bold bg-bsigreen dark:bg-bsigreen hover:bg-bsidgreen hover:dark:bg-bsidgreen">
			Bank: 1.1. Barter dan Uang
		</Button>
	</div>
</div>