<script>
	import { AccordionItem, Accordion } from 'flowbite-svelte';
</script>

<div class="flex flex-col content-center">
	<h1 class="mb-5 text-2xl font-bold">Daftar Course</h1>
	<Accordion multiple class="bg-bsilgreen text-white border-2 border-bsiorange">
		<AccordionItem class="bg-bsigreen">
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
				<span class="course-title text-lg">Introduction</span>
			</span>
			<div class="-mx-1 -my-5 divide-y [&>*]:py-3 hover:[&>div>a]:underline">
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
		<AccordionItem class="bg-bsigreen">
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
				<span class="course-title text-lg">Pembiayaan</span>
			</span>
			<div class="-mx-1 -my-5 divide-y [&>*]:py-3 hover:[&>div>a]:underline">
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
		<AccordionItem class="bg-bsigreen">
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
				<span class="course-title text-lg">Tabungan</span>
			</span>
			<div class="-mx-1 -my-5 divide-y [&>*]:py-3 hover:[&>div>a]:underline">
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
		<AccordionItem class="bg-bsigreen">
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
				<span class="course-title text-lg">Investasi</span>
			</span>
			<div class="-mx-1 -my-5 divide-y [&>*]:py-3 hover:[&>div>a]:underline">
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
