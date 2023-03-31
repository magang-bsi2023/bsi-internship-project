<script context="module">
	export function getAllCourse() {
		const modules = import.meta.glob("$materi/**/**.svelte");
		let body = [];
		for (let path in modules) {
			let pathSanitized = path.replace("/+page.svelte", "").replace("src/routes/", "");
			body.push({
				title: pathSanitized.replace("/materi/", "").replace(/-/g, " "),
				link: pathSanitized
			});
		}
		return body;
	}
	function getCourseUnit(filter, arr) {
		return arr.filter(obj => obj.title.charAt(0) === filter);
	}

	const unitOne = getCourseUnit("1", getAllCourse());
	const unitTwo = getCourseUnit("2", getAllCourse());
	const unitThree = getCourseUnit("3", getAllCourse());
</script>

<script>
	import { Heading, Accordion, AccordionItem } from 'flowbite-svelte';
	import logo from '$lib/bsi_green.svg';
	// export let data;
</script>

<div class="flex flex-col p-5 text-center my-5">
	<img src={logo} class="h-32 mb-3" alt="bsi Logo" />
	<Heading tag="h1" customSize="text-4xl font-semibold" color="text-bsiyellow" class="mb-5">
		Energi Baru Untuk Indonesia
	</Heading>
	<!-- <P class="dark:text-gray-400 text-center capitalize">{data.page.tagline}</P> -->
</div>

<div
	class="flex flex-col bg-gray-50 dark:bg-gray-800 content-center p-5 border rounded-lg dark:border-gray-600"
>
	<Accordion
	multiple
	class="[&>div]:"
	activeClasses="font-black bg-bsiyellow dark:bg-bsiyellow text-bsiwhite [&>span>span]:font-bold"
	inactiveClasses="text-gray-600 dark:text-gray-400 hover:bg-bsiyellow/[0.1]"
	>
		<AccordionItem open>
			<span class="text-base flex gap-1 items-center" slot="header">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
				class="w-6 h-6 stroke-2"
				><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/></svg>
				<span class="text-lg">Bank</span>
			</span>
			<div
				class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-bsigreen [&>div>a]:dark:text-bsigreen hover:[&>div>a]:underline hover:[&>div>a]:text-bsigreen"
			>
				{#each unitOne as unit}
				<div>
					<a href={unit.link}>{unit.title}</a>
				</div>
				{/each}
			</div>
		</AccordionItem>
		<AccordionItem open>
			<span class="text-base flex gap-1 items-center" slot="header">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
					class="w-6 h-6 stroke-2"
				><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
				</svg>
				<span class="text-lg">Syariah</span>
			</span>
			<div
				class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-bsigreen [&>div>a]:dark:text-bsigreen hover:[&>div>a]:underline hover:[&>div>a]:text-bsigreen"
			>
				{#each unitTwo as unit}
				<div>
					<a href={unit.link}>{unit.title}</a>
				</div>
				{/each}
			</div>
		</AccordionItem>
		<AccordionItem open>
			<span class="text-base flex gap-1 items-center" slot="header">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
					class="w-6 h-6 stroke-2"
				><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"/>
				</svg>
				<span class="text-lg">Indonesia</span>
			</span>
			<div
				class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-bsigreen [&>div>a]:dark:text-bsigreen hover:[&>div>a]:underline hover:[&>div>a]:text-bsigreen"
			>
				{#each unitThree as unit}
				<div>
					<a href={unit.link}>{unit.title}</a>
				</div>
				{/each}
			</div>
		</AccordionItem>
	</Accordion>
</div>