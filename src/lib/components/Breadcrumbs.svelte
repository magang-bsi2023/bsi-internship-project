<script>
	import {Breadcrumb, BreadcrumbItem} from 'flowbite-svelte';
	import { page } from '$app/stores';
	export let bcClass

    // For Breadcrumbs
	$: getPathLevel = () =>  {
		let pathArr = $page.url.pathname.split("/");
		pathArr[0] = "home"
		let body = []
		for (let path of pathArr) {
			let linkPath = path.replace("", "/").replace("home", "")
			let title = path.replace(/-/g, " ")
			body.push({
				title: title,
				link: linkPath
			})
		}

		for (let i = 2; i < body.length; i++) {
			body[i].link = "/buku" + body[i].link;
		}
		return body.slice(1)
	} 
</script>

<Breadcrumb class={bcClass} aria-label="Solid background breadcrumb" solid>
	<slot name="content"></slot>
    <BreadcrumbItem href="/" home>Home</BreadcrumbItem>
	{#each getPathLevel() as path}
	<BreadcrumbItem linkClass="capitalize ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white" href={path.link}>{path.title}</BreadcrumbItem>
	{/each}
</Breadcrumb>