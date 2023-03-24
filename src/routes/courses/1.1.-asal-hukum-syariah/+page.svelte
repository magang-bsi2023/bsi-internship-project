<script>
	import { Breadcrumb, BreadcrumbItem, Button } from 'flowbite-svelte';
	import Parag from '$lib/components/Parag.svelte';
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

<div
	class="video-container my-5 border bg-gray-50 dark:bg-gray-800 rounded-lg border-gray-200 dark:border-gray-700"
>
	<div class="iframe-container">
		<iframe
			title="video1"
			class="responsive-iframe"
			src="https://drive.google.com/file/d/1-9ZKjicBRw0ysRC_sjFhi0BUonOz0wIu/preview"
		/>
	</div>
</div>

<div
	class="video-container my-5 border bg-gray-50 dark:bg-gray-800 rounded-lg border-gray-200 dark:border-gray-700"
>
	<div class="iframe-container">
		<iframe
			title="multimedia1"
			class="responsive-iframe"
			src="https://augussst.github.io/AS-LuasdanVolume-BangunRuang/"
		/>
	</div>
</div>

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

<style global lang="postcss">
	.video-container {
		max-width: 1250px;
		margin-inline: auto;
		padding: 1.5rem;
	}
	.iframe-container {
		position: relative;
		overflow: hidden;
		width: 100%;
		padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
	}

	/* Then style the iframe to fit in the container div with full height and width */
	.responsive-iframe {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
</style>
