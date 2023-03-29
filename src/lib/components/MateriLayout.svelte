<script>
    import PageNav from '$lib/components/PageNav.svelte';
	import BcCourse from '$lib/components/BcCourse.svelte';
	import PageTitle from '$lib/utils/PageTitle.svelte';
</script>

<BcCourse></BcCourse>

<h1 class="capitalize text-2xl text-green-500 font-bold dark:text-white mb-1">
	<PageTitle></PageTitle>
</h1>

<slot></slot>

<PageNav></PageNav>