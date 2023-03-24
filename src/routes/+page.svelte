<script>
	import { Button, Card, Heading, P, Blockquote } from 'flowbite-svelte';
	import Parag from '$lib/components/Parag.svelte';
	import logo from '$lib/logo.svg';
</script>

<div class="flex flex-col p-5 text-center my-10">
	<img src={logo} class="h-40 mb-3" alt="Sharia Banking Learn Logo" />
	<Heading tag="h1" class="text-green-600 dark:text-green-600 text-3xl mb-5">
		Selamat Datang<br />di Sharia Banking Learn
	</Heading>
	<P class="dark:text-gray-400 text-center">Sumber Belajar Digital Perbankan Syariah</P>
</div>
<div class="flex flex-col gap-5 text-center [&>div>h2]:text-2xl [&>div>P]:text-center">
	<div
		class="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
	>
		<Heading tag="h2">Apa itu Sharia Banking?</Heading>
		<P
			>Sharia banking atau perbankan syariah adalah segala sesuatu mengenai bank yang sesuai dengan hukum-hukum Islam. Implementasi prinsip syariah inilah yang menjadi pembeda utama dengan bank konvensional.  Pada intinya prinsip  syariah tersebut mengacu kepada syariah Islam yang berpedoman utama kepada Al-Quran dan Hadist. Islam sebagai agama merupakan konsep yang mengatur kehidupan manusia secara komprehensif dan universal baik dalam hubungan dengan Sang Pencipta (HabluminAllah) maupun dalam hubungan sesama manusia (Hablumminannas).</P
		>
	</div>
	<div
		class="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"
	>
		<Heading tag="h2">Mengapa kita harus belajar Sharia Banking?</Heading>
		<P
			>Sebagai Muslim, kita harus memahami aturan-aturan dan prinsip-prinsip perbankan yang sesuai dengan syariat Islam agar kita terhindari dari hal-hal yang dapat memberikan keburukan karena tidak sesuai dengan syariat Islam. Dengan memahami perbankan syariah, diharapkan kita dapat mulai mengikuti syariat-syariatnya dengan menggunakan bank syariah.</P
		>
	</div>
</div>

<figure class="mx-auto max-w-screen-md text-center my-5">
	<Blockquote class="mb-3" alignment="center" size="2xl">
		يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ ٱدْخُلُوا۟ فِى ٱلسِّلْمِ كَآفَّةً وَلَا تَتَّبِعُوا۟ خُطُوَٰتِ ٱلشَّيْطَٰنِ ۚ إِنَّهُۥ لَكُمْ عَدُوٌّ مُّبِينٌ
	</Blockquote>
	<Blockquote alignment="center" size="lg">
		“Wahai orang-orang yang beriman! Masuklah ke dalam Islam secara keseluruhan, dan janganlah kamu ikuti langkah-langkah setan. Sungguh, ia musuh yang nyata bagimu.”
	</Blockquote>
	<figcaption class="flex justify-center items-center mt-3 space-x-3">
		<P>(QS. Al-Baqarah: 208)</P>
	</figcaption>
</figure>

<div
	class="flex flex-col text-center gap-3 md:gap-0 md:text-left md:flex-row items-center my-5 p-5 bg-white dark:bg-gray-800 rounded-lg border-2 border-green-500 dark:border-gray-700 shadow-md"
>
	<Heading tag="h3" customSize="text-lg font-semibold"
		>Tertarik memahami perbankan syariah lebih lanjut?</Heading
	>
	<Button color="green" href="/courses">Mulai&nbsp;Belajar</Button>
</div>
