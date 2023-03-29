<script>
	import { page } from '$app/stores';
    import PageNav from '$lib/components/PageNav.svelte';
	import BcCourse from '$lib/components/BcCourse.svelte';
	import PageTitle from '$lib/utils/PageTitle.svelte';

    // Dynamic PageNav
    function getAllCourseLink() {
		const modules = import.meta.glob("$materi/**");
        
		let body = [];
		for (let path in modules) {
			let pathSanitized = path.replace("/+page.svelte", "").replace("/src/routes/", "/");
			body.push({
				title: pathSanitized
			});
		}

        let linkArr = body.map(titles => titles.title);
		return linkArr;
	}

    const currentLink = $page.url.pathname
    const indexOfCurrentLink =  getAllCourseLink().indexOf(currentLink);

    function getNextLink() {
        const IndexOfNextLink = indexOfCurrentLink + 1
        return getAllCourseLink()[IndexOfNextLink]
    };

    function getPrevLink() {
        const IndexOfPrevLink = indexOfCurrentLink - 1
        return getAllCourseLink()[IndexOfPrevLink]
    }
</script>

<BcCourse></BcCourse>

<h1 class="capitalize text-2xl text-green-500 font-bold dark:text-white mb-1">
	<PageTitle></PageTitle>
</h1>

<slot></slot>

<PageNav prev={getPrevLink()} next={getNextLink()}></PageNav>