<script>
	import { Breadcrumb, BreadcrumbItem, Button } from 'flowbite-svelte';
	import Parag from '$lib/components/Parag.svelte';
	import Iframe from '$lib/components/Iframe.svelte';
	import PageNav from '$lib/components/PageNav.svelte';
</script>

<Breadcrumb class="mb-5" aria-label="Solid background breadcrumb" solid>
	<BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	<BreadcrumbItem href="/materi">Materi</BreadcrumbItem>
	<BreadcrumbItem>1.1. Asal Hukum Syariah</BreadcrumbItem>
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

<PageNav back="/materi" next="/1.2.-prinsip-bank-syariah"></PageNav>