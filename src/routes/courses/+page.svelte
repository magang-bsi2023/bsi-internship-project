<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
</script>

<Breadcrumb class="mb-5" aria-label="Solid background breadcrumb" solid>
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem>Courses</BreadcrumbItem>
</Breadcrumb>

<div
	class="flex flex-col content-center p-5 border rounded-lg dark:border-gray-600 dark:bg-gray-900 "
>
	<h1 class="mb-5 text-2xl font-bold text-green-500">Daftar Course</h1>
	<Accordion
		multiple
		activeClasses="bg-green-100 dark:bg-gray-800 text-green-600 dark:text-green-500 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800"
		inactiveClasses="text-gray-600 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-gray-800"
	>
		<AccordionItem class="">
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
				class="-mx-1 -my-5 divide-y dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-500 hover:[&>div>a]:underline hover:[&>div>a]:text-green-500"
			>
				<div>
					<a href="/courses/1.1.-asal-hukum-syariah">1.1. Asal Hukum Syariah</a>
				</div>
				<div>
					<a href="/courses/judul2">Judul 2</a>
				</div>
				<div>
					<a href="/courses/judul3">Judul 3</a>
				</div>
			</div>
		</AccordionItem>
		<AccordionItem class="">
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
				class="-mx-1 -my-5 divide-y dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-500 hover:[&>div>a]:underline"
			>
				<div>
					<a href="/courses/judul1">Judul 1</a>
				</div>
				<div>
					<a href="/courses/judul2">Judul 2</a>
				</div>
				<div>
					<a href="/courses/judul3">Judul 3</a>
				</div>
			</div>
		</AccordionItem>
		<AccordionItem class="">
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
				class="-mx-1 -my-5 divide-y dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-500 hover:[&>div>a]:underline"
			>
				<div>
					<a href="/courses/judul1">Judul 1</a>
				</div>
				<div>
					<a href="/courses/judul2">Judul 2</a>
				</div>
				<div>
					<a href="/courses/judul3">Judul 3</a>
				</div>
			</div>
		</AccordionItem>
		<AccordionItem class="">
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
				class="-mx-1 -my-5 divide-y dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-500 hover:[&>div>a]:underline"
			>
				<div>
					<a href="/courses/judul1">Judul 1</a>
				</div>
				<div>
					<a href="/courses/judul2">Judul 2</a>
				</div>
				<div>
					<a href="/courses/judul3">Judul 3</a>
				</div>
			</div>
		</AccordionItem>
	</Accordion>
</div>

<style lang="postcss">
</style>
