<script>
    import { Heading, P } from 'flowbite-svelte';
    import logo from '$lib/assets/logo/bsilib.svg';
    import bsi from '$lib/assets/bsi-logo/bsi_horizontal_green.svg'
    import mbkm from '$lib/assets/tentang/kampusmerdeka.png'
    import msib from '$lib/assets/tentang/msib.png'
    import msibwhite from '$lib/assets/tentang/msib-white.png'
    import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
    import riki from '$lib/assets/pengembang/riki.jpg'
    import oka from '$lib/assets/pengembang/oka.jpg'
    import nanda from '$lib/assets/pengembang/nanda.jpg'
    import fadhilah from '$lib/assets/pengembang/fadhilah.jpg'
</script>

<Breadcrumbs></Breadcrumbs>

<div class="flex justify-center my-5 p-5 ">
    <div class="flex items-center mx-auto gap-5">
        <img src={logo} class="w-24 md:w-32" alt="BSI Library Logo">
        <Heading class="font-bold text-bsiyellow dark:text-bsiyellow whitespace-nowrap" color="" tag="h1" customSize="text-2xl md:text-3xl">Bank Syariah Indonesia<br>Library</Heading>
    </div>
</div>

<P class="mb-10">
    BSI Library merupakan sebuah website edukasi yang didedikasikan untuk mengenalkan dunia perbankan syariah dan Bank Syariah Indonesia. BSI Library menyajikan konten-konten yang berupa buku-buku yang dirangkum ke dalam berbagai media pembelajaran yang menarik, seperti video, animasi, infografis, dan banyak lagi. Diharapkan BSI Library dapat memperluas pengetahuan masyarakat Indonesia tentang perbankan syariah dan meningkatkan kesadaran akan produk dan layanan yang ditawarkan oleh Bank Syariah Indonesia.
</P>

<div class="flex w-fit mx-auto justify-evenly mb-5 gap-10 items-center py-5 px-10 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <div class="w-52"><img class="w-full h-full" src={bsi} alt="logo bsi"></div>
    <div class="w-52"><img class="w-full h-full" src={mbkm} alt="logo mbkm"></div>
    <div class="w-52 dark:hidden"><img class="w-full h-full" src={msib} alt="logo msib"></div>
    <div class="w-52 hidden dark:block"><img class="w-full h-full" src={msibwhite} alt="logo msib"></div>
</div>

<Heading class="mb-5 text-center font-bold text-bsigreen dark:text-bsigreen" tag="h2" color="" customSize="text-2xl">Latar Belakang</Heading>

<P class="mb-10">
    BSI Library merupakan proyek akhir yang dihasilkan oleh peserta Magang Merdeka di Bank Syariah Indonesia pada divisi Digital Learning & Multimedia yang ditempatkan di BSI Syariah University (BSU). Divisi Digital Learning & Multimedia dan pengembangan BSI Library dipandu dan dimentori oleh Bapak Taufik Machrus yaitu Dekan Leadership Academy di BSU.
</P>

<Heading class="mb-5 text-center font-bold text-bsigreen dark:text-bsigreen" tag="h2" color="" customSize="text-2xl">Pengembang</Heading>

<div class="flex flex-wrap justify-evenly mb-10 gap-5 [&>div]:w-60">
    <div class="flex flex-col justify-center text-center px-5 pt-5 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <img src={fadhilah} alt="foto pengembang"
        class="w-40 mb-3 rounded-full border-2 border-bsigreen mx-auto">
        <Heading class="font-bold text-bsidgreen dark:text-bsilgreen" color="" tag="h3" customSize="text-lg">
            Fadhilah Azizah Hasan
        </Heading>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">Pengembang Video</p>
        <a class="flex mt-2 py-2 justify-center gap-2 items-center rounded-t-lg border-x-2 border-t-2 border-gray-200 dark:border-gray-700" href="https://www.instagram.com/dhila.zh/" target="_blank">
            <svg class="w-7 text-bsigreen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z"/><path fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28ZM256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112Z"/></svg>
            <span class="text-gray-600 dark:text-gray-400 text-sm">dhila.zh</span>
        </a>
    </div>
    <div class="flex flex-col justify-center text-center px-5 pt-5 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <img src={oka} alt="foto pengembang"
        class="w-40 mb-3 rounded-full border-2 border-bsigreen mx-auto">
        <Heading class="font-bold text-bsidgreen dark:text-bsilgreen" color="" tag="h3" customSize="text-lg">
            M Oka Augusta
        </Heading>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">Pengembang Website</p>
        <a class="flex mt-2 py-2 justify-center gap-2 items-center rounded-t-lg border-x-2 border-t-2 border-gray-200 dark:border-gray-700" href="https://www.instagram.com/oka.augusta/" target="_blank">
            <svg class="w-7 text-bsigreen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z"/><path fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28ZM256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112Z"/></svg>
            <span class="text-gray-600 dark:text-gray-400 text-sm">oka.augusta</span>
        </a>
    </div>
    <div class="flex flex-col justify-center text-center px-5 pt-5 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <img src={nanda} alt="foto pengembang"
        class="w-40 mb-3 rounded-full border-2 border-bsigreen mx-auto">
        <Heading class="font-bold text-bsidgreen dark:text-bsilgreen" color="" tag="h3" customSize="text-lg">
            Putri Ayu Ananda
        </Heading>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">Pengembang Materi</p>
        <a class="flex mt-2 py-2 justify-center gap-2 items-center rounded-t-lg border-x-2 border-t-2 border-gray-200 dark:border-gray-700" href="https://www.instagram.com/putriayuannda/" target="_blank">
            <svg class="w-7 text-bsigreen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z"/><path fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28ZM256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112Z"/></svg>
            <span class="text-gray-600 dark:text-gray-400 text-sm">putriayuannda</span>
        </a>
    </div>
    <div class="flex flex-col justify-center text-center px-5 pt-5 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
        <img src={riki} alt="foto pengembang"
        class="w-40 mb-3 rounded-full border-2 border-bsigreen mx-auto">
        <Heading class="font-bold text-bsidgreen dark:text-bsilgreen" color="" tag="h3" customSize="text-lg">
            Riki Ramadhan
        </Heading>
        <p class="text-gray-600 dark:text-gray-400 text-sm mb-2">Pengembang Media</p>
        <a class="flex mt-2 py-2 justify-center gap-2 items-center rounded-t-lg border-x-2 border-t-2 border-gray-200 dark:border-gray-700" href="https://www.instagram.com/riki.rmdhn/" target="_blank">
            <svg class="w-7 text-bsigreen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z"/><path fill="currentColor" d="M377.33 162.67a28 28 0 1 1 28-28a27.94 27.94 0 0 1-28 28ZM256 181.33A74.67 74.67 0 1 1 181.33 256A74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112a112 112 0 0 0-112-112Z"/></svg>
            <span class="text-gray-600 dark:text-gray-400 text-sm">riki.rmdhn</span>
        </a>
    </div>
</div>