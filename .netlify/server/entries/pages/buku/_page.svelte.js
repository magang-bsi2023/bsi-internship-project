import { c as create_ssr_component, i as subscribe, o as onDestroy, v as validate_component, h as add_attribute, j as each, f as escape } from "../../../chunks/index2.js";
import "classnames";
/* empty css                                                       */import { H as Heading } from "../../../chunks/Heading.js";
import { P } from "../../../chunks/P.js";
import { B as Breadcrumbs } from "../../../chunks/Breadcrumbs.js";
import { s as searchHandler, c as createSearchStore } from "../../../chunks/search.js";
function getBuku() {
  const modules = /* @__PURE__ */ Object.assign({ "/src/lib/assets/book-cover/buku-2.jpg": () => import("../../../chunks/buku-2.js"), "/src/lib/assets/book-cover/energi-baru-untuk-indonesia.jpg": () => import("../../../chunks/energi-baru-untuk-indonesia.js"), "/src/routes/buku/buku-2/+page.svelte": () => import("./buku-2/_page.svelte.js"), "/src/routes/buku/energi-baru-untuk-indonesia/+page.svelte": () => import("./energi-baru-untuk-indonesia/_page.svelte.js") });
  const buku = [];
  for (let path in modules) {
    const pathSanitized = path.replace("/+page.svelte", "").replace("/src/routes/", "/");
    const imgPath = pathSanitized.replace("/buku/", "src/lib/assets/book-cover/").concat(".jpg");
    const isSvelteFile = path.endsWith("+page.svelte");
    if (isSvelteFile) {
      buku.push({
        title: pathSanitized.replace("/buku/", "").replace(/-/g, " "),
        link: pathSanitized,
        img: imgPath
      });
    }
  }
  return buku;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $searchStore, $$unsubscribe_searchStore;
  const searchBuku = getBuku().map((buku) => ({ ...buku, searchTerms: `${buku.title}` }));
  const searchStore = createSearchStore(searchBuku);
  $$unsubscribe_searchStore = subscribe(searchStore, (value) => $searchStore = value);
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
  onDestroy(() => {
    unsubscribe();
  });
  $$unsubscribe_searchStore();
  return `${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, { bcClass: "mb-5" }, {}, {})}

<div class="flex mb-5">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      customSize: "text-3xl",
      color: "text-bsigreen",
      class: "font-bold"
    },
    {},
    {
      default: () => {
        return `Daftar Buku`;
      }
    }
  )}
	<div class="flex flex-row items-center px-2 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus-within:border-bsiyellow focus-within:dark:border-bsiyellow rounded-full"><svg class="w-7 h-7 stroke-bsiyellow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>
		<input class="-ml-2 border-0 focus:ring-0 bg-transparent dark:text-white" type="search" placeholder="Cari buku..."${add_attribute("value", $searchStore.search, 0)}></div></div>

<div class="flex flex-col flex-wrap md:flex-row md:justify-evenly gap-5 md:gap-y-10">${each($searchStore.filtered, (buku) => {
    return `<a${add_attribute("href", buku.link, 0)} class="flex gap-3 md:inline md:w-fit [&>div]:hover:bg-gray-100 [&>div]:dark:hover:bg-gray-700"><div class="relative h-auto w-32 md:h-[30rem] md:w-fit md:mx-auto overflow-hidden rounded-lg shadow-xl">
				<img class="h-full mx-auto"${add_attribute("src", buku.img, 0)} alt="${escape(buku.title, true) + " cover"}"></div>
			<div class="grow flex items-center md:items-start md:mt-3 py-2 px-3 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md"><div class="md:mx-auto md:[&>*]:text-center">${validate_component(Heading, "Heading").$$render(
      $$result,
      {
        tag: "h2",
        customSize: "text-2xl md:text-xl",
        class: "capitalize"
      },
      {},
      {
        default: () => {
          return `${escape(buku.title)}`;
        }
      }
    )}
					${validate_component(P, "P").$$render($$result, { color: "text-gray-400" }, {}, {
      default: () => {
        return `This is book description`;
      }
    })}
				</div></div>
		</a>`;
  })}</div>`;
});
export {
  Page as default
};
