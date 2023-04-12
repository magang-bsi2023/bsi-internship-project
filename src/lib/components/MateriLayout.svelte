<script>
    import PageNav from '$lib/components/PageNav.svelte';
	import PageTitle from '$lib/utils/PageTitle.svelte';
	import Evaluasi from '$lib/components/Evaluasi.svelte'
	import { Tabs, TabItem, Button, Heading, Modal, P } from 'flowbite-svelte';
	export let linkEvaluasi;

	let defaultModal = false;
</script>

<div class="[&>:nth-child(3)]:bg-transparent [&>:nth-child(3)]:dark:bg-transparent [&>:nth-child(3)]:mt-0 [&>:nth-child(3)]:px-0">
	<Tabs style="underline" defaultClass="flex flex-wrap space-x-2 | [&>li>button:not(.active)]:rounded-t-lg [&>li>button:not(.active)]:border-t [&>li>button:not(.active)]:border-x [&>li>button:not(.active)]:border-b-0 [&>li>button:not(.active)]:border-gray-200 [&>li>button:not(.active)]:dark:border-gray-700 [&>li>button:not(.active)]:bg-gray-50 [&>li>button:not(.active)]:dark:bg-gray-800">
		<TabItem open>
			<div slot="title" class="flex items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
				Materi
			</div>
			<Heading tag="h1" customSize="text-2xl" color="text-bsigreen dark:text-bsigreen" class="capitalize font-bold mb-1">
				<PageTitle></PageTitle>
			</Heading>
			<slot></slot>
		</TabItem>
		<TabItem>
			<div slot="title" class="flex items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>
				Video
			</div>
			<slot name="video"></slot>
		</TabItem>
	</Tabs>
</div>

<div class="flex justify-center mb-5">
	<Button on:click={() => defaultModal = true} size="xl" class="flex gap-1 w-1/4 bg-bsiyellow dark:bg-bsiyellow hover:bg-bsidyellow hover:dark:bg-bsidyellow">
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
		Quiz
	</Button>

	<Modal title="Quiz" bind:open={defaultModal} autoclose class="w-screen">
		<Evaluasi title="evaluasi" src={linkEvaluasi}></Evaluasi>
		<svelte:fragment slot='footer'>
			<Button class="bg-bsigreen dark:bg-bsigreen hover:bg-bsidgreen hover:dark:bg-bsidgreen">Tutup</Button>
		</svelte:fragment>
	</Modal>
</div>

<PageNav></PageNav>

<style global lang="postcss">
	button.active {
		color: rgba(0,163,157) !important;
		border-color: rgba(0,163,157) !important;
		background-color: rgba(0,163,157,0.1) !important;
		border-radius: 0.5rem 0.5rem 0 0;
	}
</style>