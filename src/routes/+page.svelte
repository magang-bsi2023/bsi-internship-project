<script>
	import { Button, Card, Heading, P, Blockquote } from 'flowbite-svelte';
	import Parag from '$lib/components/Parag.svelte';
</script>

<div class="flex flex-col p-5 text-center my-10">
	<img src="./src/lib/logo.svg" class="h-40 mb-3" alt="Sharia Banking Learn Logo" />
	<Heading tag="h1" class="text-green-600 dark:text-green-600 text-3xl mb-5">
		Selamat Datang<br />di Sharia Banking Learn
	</Heading>
	<P class="dark:text-gray-400 text-center">Platform edukasi perbankan syariah</P>
</div>
<div class="flex flex-col gap-5 text-center [&>div>h2]:text-2xl [&>div>P]:text-center">
	<div
		class="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
	>
		<Heading tag="h2">Apa itu sharia banking?</Heading>
		<P
			>Sharia banking atau perbangkan syariah adalah Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Temporibus, explicabo! Voluptatem consectetur maxime est vero, iusto non
			dolores amet molestias, nostrum expedita exercitationem harum earum et unde adipisci ad sequi?</P
		>
	</div>
	<div
		class="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
	>
		<Heading tag="h2">Mengapa kita harus belajar sharia banking?</Heading>
		<P
			>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores laborum soluta
			perferendis neque. Temporibus officiis laboriosam doloremque, quae atque maxime amet
			laudantium laborum ducimus. Facilis qui tempore unde sapiente!</P
		>
	</div>
</div>

<figure class="mx-auto max-w-screen-md text-center my-5">
	<Blockquote class="mb-3" alignment="center" size="2xl">
		فَاَوْفُوا الْكَيْلَ وَالْمِيْزَانَ وَلَا تَبْخَسُوا النَّاسَ اَشْيَاۤءَهُمْ
	</Blockquote>
	<Blockquote alignment="center" size="lg">
		“Sempurnakanlah takaran dan timbangan, dan jangan kamu merugikan orang sedikit pun.”
	</Blockquote>
	<figcaption class="flex justify-center items-center mt-3 space-x-3">
		(Qs. Al’A’raf: 85).
	</figcaption>
</figure>

<div
	class="flex flex-col text-center gap-3 md:gap-0 md:text-left md:flex-row items-center my-5 p-5 bg-white dark:bg-gray-800 rounded-lg border-2 border-green-500 dark:border-gray-700 shadow-md"
>
	<Heading tag="h3" customSize="text-lg font-bold"
		>Tertarik memahami perbankan syariah lebih lanjut?</Heading
	>
	<Button color="green" href="/courses">Mulai&nbsp;Belajar</Button>
</div>
