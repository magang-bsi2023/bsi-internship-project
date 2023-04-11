<script>
    import { Heading, P } from 'flowbite-svelte';
    import logo from '$lib/assets/logo/bsilib.svg';
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
    import riki from '$lib/assets/pengembang/riki.jpg'
</script>

<Breadcrumbs></Breadcrumbs>

<div class="flex justify-center my-5 p-5 ">
    <div class="flex items-center gap-5">
        <img src={logo} class="w-32" alt="BSI Library Logo">
        <Heading class="font-bold text-bsiyellow dark:text-bsiyellow" color="" tag="h1" customSize="text-3xl">Bank Syariah Indonesia<br>Library</Heading>
    </div>
</div>

<P class="mb-10">
    BSI Library merupakan sebuah website edukasi yang didedikasikan untuk mengenalkan dunia perbankan syariah dan Bank Syariah Indonesia. BSI Library menyajikan konten-konten yang berupa buku-buku yang dirangkum ke dalam berbagai media pembelajaran yang menarik, seperti video, animasi, infografis, dan banyak lagi. 
    Diharapkan BSI Library dapat memperluas pengetahuan masyarakat Indonesia tentang perbankan syariah dan meningkatkan kesadaran akan produk dan layanan yang ditawarkan oleh Bank Syariah Indonesia.
</P>

<Heading class="mb-5 text-center font-bold text-bsigreen dark:text-bsigreen" tag="h2" color="" customSize="text-2xl">Pengembang</Heading>

<div class="flex justify-around gap-5">
    <div class="text-center p-5 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <img src={riki} alt=""
        class="w-40 mb-3 rounded-full border-2 border-bsigreen">
        <Heading class="font-bold text-bsidgreen dark:text-bsilgreen" color="" tag="h3" customSize="text-lg">
            Riki Ramadhan
        </Heading>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Pengembang Media</p>
    </div>
    <div class="text-center p-5 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <img src={riki} alt=""
        class="w-40 mb-3 rounded-full border-2 border-bsigreen">
        <Heading class="font-bold text-bsidgreen dark:text-bsilgreen" color="" tag="h3" customSize="text-lg">
            Riki Ramadhan
        </Heading>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Pengembang Media</p>
    </div>
    <div class="text-center p-5 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <img src={riki} alt=""
        class="w-40 mb-3 rounded-full border-2 border-bsigreen">
        <Heading class="font-bold text-bsidgreen dark:text-bsilgreen" color="" tag="h3" customSize="text-lg">
            Riki Ramadhan
        </Heading>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Pengembang Media</p>
    </div>
    <div class="text-center p-5 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <img src={riki} alt=""
        class="w-40 mb-3 rounded-full border-2 border-bsigreen">
        <Heading class="font-bold text-bsidgreen dark:text-bsilgreen" color="" tag="h3" customSize="text-lg">
            Riki Ramadhan
        </Heading>
        <p class="text-gray-500 dark:text-gray-400 text-sm">Pengembang Media</p>
    </div>
</div>