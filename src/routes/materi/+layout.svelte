<script>
	import { Heading, NavHamburger, Navbar, NavLi, NavUl } from "flowbite-svelte";
	import { page } from '$app/stores';

	function getAllCourse() {
		const modules = import.meta.glob("./**/**.svelte");
		let body = [];
		for (let path in modules) {
			let pathSanitized = path.replace("/+page.svelte", "").replace("./", "/");
			let linkPath = ("/materi" + pathSanitized)
			body.push({
				title: pathSanitized.replace("/", "").replace(/-/g, " "),
				link: linkPath
			});
		}
		return body.slice(1);
	}

	function getCourseUnit(filter, arr) {
		return arr.filter(obj => obj.title.charAt(0) === filter);
	}

	const unitOne = getCourseUnit("1", getAllCourse());
	const unitTwo = getCourseUnit("2", getAllCourse());
	const unitThree = getCourseUnit("3", getAllCourse());
</script>

<div class="grid grid-flow-col auto-cols-auto gap-5">
	<Navbar navClass="capitalize px-3 py-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" navDivClass="" let:hidden let:toggle>
		<NavHamburger on:click={toggle}></NavHamburger>
		<NavUl {hidden} ulClass="" activeClass="bg-bsiyellow text-white" nonActiveClass="">
			<Heading tag="h1" customSize="text-lg">Bank</Heading>
			<div class="divide-y-2 [&>li]:ml-4 [&>li]:py-1">
				{#each unitOne as course}
					<NavLi class="" active={$page.url.pathname == course.link} href={course.link}>{course.title}</NavLi>
				{/each}
			</div>
			<Heading tag="h1" customSize="text-lg">Syariah</Heading>
			<div class="divide-y-2 [&>li]:ml-4 [&>li]:py-1">
				{#each unitTwo as course}
					<NavLi active={$page.url.pathname == course.link} href={course.link}>{course.title}</NavLi>
				{/each}
			</div>
			<Heading tag="h1" customSize="text-lg">Indonesia</Heading>
			<div class="divide-y-2 [&>li]:ml-4 [&>li]:py-1">
				{#each unitThree as course}
					<NavLi active={$page.url.pathname == course.link} href={course.link}>{course.title}</NavLi>
				{/each}
			</div>
		</NavUl>
	</Navbar>
	<!-- <div class="hidden md:flex w-fit h-screen ">
		<li class="capitalize text-sm list-none px-3 py-5 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 ">
				<Heading tag="h1" customSize="text-lg">Bank</Heading>
				<div class="divide-y-2">
					{#each unitOne as course}
						<ol class="ml-4 py-1"><a href={course.link}>{course.title}</a></ol>
					{/each}
				</div>
				<Heading tag="h1" customSize="text-lg">Syariah</Heading>
				<div class="divide-y-2">
					{#each unitTwo as course}
						<ol class="ml-4 py-1"><a href={course.link}>{course.title}</a></ol>
					{/each}
				</div>
				<Heading tag="h1" customSize="text-lg">Indonesia</Heading>
				<div class="divide-y-2">
					{#each unitThree as course}
						<ol class="ml-4 py-1"><a href={course.link}>{course.title}</a></ol>
					{/each}
				</div>
		</li>
	</div> -->
	
	<div class="w-full">
		<slot></slot>
	</div>
</div>