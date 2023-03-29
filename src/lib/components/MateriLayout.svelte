<script>
    import PageNav from '$lib/components/PageNav.svelte';
	import BcCourse from '$lib/components/BcCourse.svelte';
	import PageTitle from '$lib/utils/PageTitle.svelte';
	import Evaluasi from '$lib/components/Evaluasi.svelte'
	import { Tabs, TabItem } from 'flowbite-svelte';

	export let linkEvaluasi;
</script>

<BcCourse></BcCourse>


<div class="[&>:nth-child(3)]:bg-transparent [&>:nth-child(3)]:dark:bg-transparent [&>:nth-child(3)]:mt-0 [&>:nth-child(3)]:px-0 mb-5">
	<Tabs style="underline" activeClass="text-green-600">
		<TabItem open>
			<div slot="title" class="flex items-center gap-2">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>
				Materi
			</div>
			<h1 class="capitalize text-2xl text-green-500 font-bold dark:text-green-500 mb-1">
				<PageTitle></PageTitle>
			</h1>
			<slot></slot>
		</TabItem>
		<TabItem>
		<div slot="title" class="flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
			Soal
		</div>
		<Evaluasi title="evaluasi" src={linkEvaluasi}></Evaluasi>
		</TabItem>
	</Tabs>
</div>

<PageNav></PageNav>

<style global lang="postcss">
	button.active {
		color: rgb(22 163 74) !important;
		border-color: rgb(22 163 74) !important;
		background-color: rgb(22, 163, 74, 0.1) !important;
		border-radius: 0.5rem 0.5rem 0 0;
	}
</style>