<script>
	import { Breadcrumb, BreadcrumbItem, Button } from 'flowbite-svelte';
	import Parag from '$lib/components/Parag.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
</script>

<Breadcrumb class="mb-5" aria-label="Solid background breadcrumb" solid>
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/courses">Courses</BreadcrumbItem>
	<BreadcrumbItem>1.1 Asal Hukum Syariah</BreadcrumbItem>
</Breadcrumb>

<h1 class="capitalize text-2xl text-green-500 font-bold dark:text-white mb-1">
	1.1. asal hukum syariah
</h1>
<Parag>
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, impedit in. Impedit expedita
	reprehenderit inventore. Placeat unde quibusdam voluptas cum quam? Ut soluta, explicabo numquam
	neque quidem placeat cupiditate fuga?
</Parag>

<Iframe title="video1" src="https://drive.google.com/file/d/1-9ZKjicBRw0ysRC_sjFhi0BUonOz0wIu/preview"></Iframe>

<Iframe title="interactive1" src="https://augussst.github.io/AS-LuasdanVolume-BangunRuang/"></Iframe>

<div class="flex justify-around">
	<Button
		href="/"
		class="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 mr-1"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
			/>
		</svg>
		Kembali
	</Button>
	<Button
		href="/"
		class="bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
	>
		Selanjutnya <svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6 ml-1"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
			/>
		</svg>
	</Button>
</div>
