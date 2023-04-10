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
				img: imgPath
			})
		} 
	}
	return buku;
}