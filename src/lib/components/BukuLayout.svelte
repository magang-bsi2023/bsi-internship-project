<script>
	import { Heading, Navbar, NavLi, NavUl, Button, Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
	import { page } from '$app/stores';
	import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

    let bookTitle = $page.url.pathname.split("/").slice(2).toString().replace(/-/g, " ");
    let bookPath = bookTitle.replace(/ /g, "-")

	function getAllMateri() {
		const modules = import.meta.glob("$buku/*/*/**.svelte");
		let body = [];
		for (let path in modules) {
            let pathSanitized = path.replace("/+page.svelte", "").replace("/src/routes/", "/");
            let linkPath = (pathSanitized)
            // check if current path is equal to current book
            if (pathSanitized.split("/")[2] == bookPath) {
                body.push({
                    title: pathSanitized.split("/").slice(3).toString().replace(/-/g, " "),
                    link: linkPath
                });
            }
		}
		return body;
	}

    // console.log(getAllMateri());

	function getBookUnit(filter, arr) {
		return arr.filter(obj => obj.title.charAt(0) === filter);
	}

	const unitOne = getBookUnit("1", getAllMateri());
	const unitTwo = getBookUnit("2", getAllMateri());
	const unitThree = getBookUnit("3", getAllMateri());

</script>

<Breadcrumbs bcClass="hidden md:block mb-5"></Breadcrumbs>

<div class="flex flex-col md:flex-row gap-3 sm:gap-5">
	<!-- Small screen materi list navigation -->
	<div class="md:hidden [&>nav]:z-20 [&>nav]:relative">
		<Breadcrumbs>
			<div slot="content" class="[&>nav]:bg-gray-50 [&>nav]:dark:bg-gray-800">
				<Navbar navClass="mr-2 capitalize whitespace-nowrap grow-0 dark:border-gray-700 [&>div.container]:h-7
					| [&>div.container>div>ul]:bg-gray-900 [&>div.container>div>ul]:border-0 
					| [&>div.container>div]:absolute [&>div.container>div]:left-0 [&>div.container>div]:-z-10 [&>div.container>div]:px-3 [&>div.container>div]:pb-5 [&>div.container>div]:bg-gray-50 [&>div.container>div]:dark:bg-gray-800 [&>div.container>div]:border-x [&>div.container>div]:border-b [&>div.container>div]:border-gray-200 [&>div.container>div]:dark:border-gray-700 [&>div.container>div]:rounded-b-lg" navDivClass="" let:hidden let:toggle>
					<Button on:click={toggle} btnClass="ml-0 visible md:hidden"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg></Button>
					<NavUl {hidden}
					ulClass="mt-5 bg-gray-50 dark:bg-gray-800 [&>*]:bg-gray-50 [&>*]:dark:bg-gray-800"
					activeClass="bg-bsigreen text-white"
					nonActiveClass="">
						<Heading tag="h1" class="font-bold" color="text-bsigreen" customSize="text-lg">Bank</Heading>
						<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-white">
							{#each unitOne as course}
								<NavLi on:click={toggle} class="" active={$page.url.pathname == course.link} href={course.link}>{course.title}</NavLi>
							{/each}
						</div>
						<Heading tag="h1" class="font-bold" color="text-bsigreen" customSize="text-lg">Syariah</Heading>
						<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-gray-200">
							{#each unitTwo as course}
								<NavLi on:click={toggle} active={$page.url.pathname == course.link} href={course.link}>{course.title}</NavLi>
							{/each}
						</div>
						<Heading tag="h1" class="font-bold" color="text-bsigreen" customSize="text-lg">Indonesia</Heading>
						<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-gray-200">
							{#each unitThree as course}
								<NavLi on:click={toggle} active={$page.url.pathname == course.link} href={course.link}>{course.title}</NavLi>
							{/each}
						</div>
					</NavUl>
				</Navbar>
			</div>
		</Breadcrumbs>
	</div>

	<!-- Big screen materi list navigation -->
	<div class="md:flex hidden [&>nav]:bg-gray-50 [&>nav]:dark:bg-gray-800">
		<Navbar navClass="capitalize whitespace-nowrap grow-0 px-3 py-3 small:py-5 border border-gray-200 rounded-lg dark:border-gray-700
			| [&>div.container>div>ul]:bg-gray-900 [&>div.container>div>ul]:border-0" navDivClass="" let:hidden>
			<NavUl {hidden}
			ulClass="mt-5 bg-gray-50 dark:bg-gray-800 [&>*]:bg-gray-50 [&>*]:dark:bg-gray-800"
			activeClass="bg-bsigreen text-white"
			nonActiveClass="">
				<Heading tag="h1" class="font-bold" color="text-bsigreen" customSize="text-lg">Bank</Heading>
				<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-white">
					{#each unitOne as course}
						<NavLi class="" active={$page.url.pathname == course.link} href={course.link}>{course.title}</NavLi>
					{/each}
				</div>
				<Heading tag="h1" class="font-bold" color="text-bsigreen" customSize="text-lg">Syariah</Heading>
				<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-gray-200">
					{#each unitTwo as course}
						<NavLi active={$page.url.pathname == course.link} href={course.link}>{course.title}</NavLi>
					{/each}
				</div>
				<Heading tag="h1" class="font-bold" color="text-bsigreen" customSize="text-lg">Indonesia</Heading>
				<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-gray-200">
					{#each unitThree as course}
						<NavLi active={$page.url.pathname == course.link} href={course.link}>{course.title}</NavLi>
					{/each}
				</div>
			</NavUl>
		</Navbar>
	</div>
	<div class="grow">
		<slot></slot>
	</div>
</div>