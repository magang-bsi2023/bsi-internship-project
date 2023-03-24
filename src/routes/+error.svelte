<script>
    import { Heading, P, Button } from 'flowbite-svelte'
    import { page } from '$app/stores';
</script>

<div class="flex flex-col justify-center text-center mt-16">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-52 h-52 mx-auto text-green-600">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
    </svg>      
    <Heading class="mb-3" tag="h1" customSize="text-2xl">Terjadi Kesalahan</Heading>
    <P class="text-center mb-5">Error: {$page.error.message}</P>
    <Button class="mx-auto" color="green" href="/">Home</Button>
</div>