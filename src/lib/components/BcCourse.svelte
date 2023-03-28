<script>
    import {Breadcrumb, BreadcrumbItem} from 'flowbite-svelte';
    import PageTitle from '$lib/utils/PageTitle.svelte';
</script>

<Breadcrumb class="mb-5" aria-label="Solid background breadcrumb" solid>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
    <BreadcrumbItem href="/materi">Materi</BreadcrumbItem>
    <BreadcrumbItem><PageTitle></PageTitle></BreadcrumbItem>
</Breadcrumb>
