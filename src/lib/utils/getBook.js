export function getBuku() {
	const modules = import.meta.glob(["$buku/*/+page.svelte", "/img/book-cover/*"]);
	const buku = [];

	for (let path in modules) {
		const pathSanitized = path.replace("/+page.svelte", "").replace("/src/routes/", "/");
		const imgPath = pathSanitized.replace("/buku/", "img/book-cover/").concat(".jpg");
		const isSvelteFile = path.endsWith("+page.svelte");

		if (isSvelteFile) {
			buku.push({
				title: pathSanitized.replace("/buku/", "").replace(/-/g, " "),
				link: pathSanitized,
				img: imgPath,
			})
		} 
	}
	return buku;
}

export function getBukuUnit() {
	const modules = import.meta.glob("$buku/*/*/+page.svelte");
	const bukuUnit = [];

	for (let path in modules) {
		const pathSanitized = path.replace("/src/routes/", "/").replace("/+page.svelte", "");
		const bookTitle = pathSanitized.replace(/-/g, " ").split("/").slice(2, 3).toString()
		const title = pathSanitized.replace(/-/g, " ").split("/").slice(3).toString()

		console.log(bookTitle);

		bukuUnit.push({
			bookTitle: bookTitle,
			title: title,
			link: pathSanitized
		})

	}
	return bukuUnit
}