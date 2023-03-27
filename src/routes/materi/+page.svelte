<script context="module">
	export function getAllCourse() {
		const modules = import.meta.glob("./**/**.svelte");
		let body = [];
		for (let path in modules) {
			let pathSanitized = path.replace("/+page.svelte", "").replace("./", "/");
			let linkPath = ("materi" + pathSanitized)
			body.push({
				title: pathSanitized.replace("/", "").replace(/-/g, " "),
				link: linkPath
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
	const unitFour = getCourseUnit("4", getAllCourse());
</script>

<script>
	import { Breadcrumb, BreadcrumbItem, Heading, Accordion, AccordionItem, Button } from 'flowbite-svelte';

	// accordion toggle
	let items = Array(4).fill(false);
	let trueChecker = arr => arr.every(v => v === true);

	const openAll = () => items.forEach((_,i)=> items[i] = true)
	const closeAll= () => items.forEach((_,i)=> items[i] = false)
</script>

<Breadcrumb class="mb-5" aria-label="Solid background breadcrumb" solid>
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem>Courses</BreadcrumbItem>
</Breadcrumb>

<div class="flex flex-row">
	<Heading tag="h1" class="mb-5" color="text-green-600 dark:text-green-500" customSize="text-3xl font-bold">Perbankan Syariah</Heading>
	{#if trueChecker(items)}
	<Button outline pill size="sm" class="ml-auto mb-5 w-40" color="green" on:click={closeAll}>Tutup Semua</Button>
	{:else}
	<Button outline pill size="sm" class="ml-auto mb-5 w-40" color="green" on:click={openAll}>Buka Semua</Button>
	{/if}
</div>
<div
	class="flex flex-col content-center p-5 border rounded-lg dark:border-gray-600 dark:bg-gray-900 "
>
	<Accordion
	multiple
	activeClasses="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-500 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
	inactiveClasses="text-gray-600 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-gray-800"
	>
		<AccordionItem bind:open={items[0]}>
			<span class="text-base flex gap-2" slot="header">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
					/>
				</svg>
				<span class="text-lg">Pendahuluan</span>
			</span>
			<div
				class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-600 [&>div>a]:dark:text-green-500 hover:[&>div>a]:underline hover:[&>div>a]:text-green-500"
			>
				{#each unitOne as unit}
				<div>
					<a href={unit.link}>{unit.title}</a>
				</div>
				{/each}
			</div>
		</AccordionItem>
		<AccordionItem bind:open={items[1]}>
			<span class="text-base flex gap-2" slot="header">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
					/>
				</svg>
				<span class="text-lg">Implementasi Hukum Syariah di Perbankan</span>
			</span>
			<div
				class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-600 [&>div>a]:dark:text-green-500 hover:[&>div>a]:underline hover:[&>div>a]:text-green-500"
			>
				{#each unitTwo as unit}
				<div>
					<a href={unit.link}>{unit.title}</a>
				</div>
				{/each}
			</div>
		</AccordionItem>
		<AccordionItem bind:open={items[2]}>
			<span class="text-base flex gap-2" slot="header">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
					/>
				</svg>
				<span class="text-lg">Perbedaan Perbankan Syariah dan Perbankan Konvensional</span>
			</span>
			<div
				class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-600 [&>div>a]:dark:text-green-500 hover:[&>div>a]:underline hover:[&>div>a]:text-green-500"
			>
				{#each unitThree as unit}
				<div>
					<a href={unit.link}>{unit.title}</a>
				</div>
				{/each}
			</div>
		</AccordionItem>
		<AccordionItem bind:open={items[3]}>
			<span class="text-base flex gap-2" slot="header">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
					/>
				</svg>
				<span class="text-lg">Produk Perbankan Syariah</span>
			</span>
			<div
				class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-600 [&>div>a]:dark:text-green-500 hover:[&>div>a]:underline hover:[&>div>a]:text-green-500"
			>
				{#each unitFour as unit}
				<div>
					<a href={unit.link}>{unit.title}</a>
				</div>
				{/each}
			</div>
		</AccordionItem>
	</Accordion>
</div>

<style lang="postcss">
</style>
