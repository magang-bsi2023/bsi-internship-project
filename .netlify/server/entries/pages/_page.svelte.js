import { c as create_ssr_component, h as add_attribute, v as validate_component, k as each, f as escape } from "../../chunks/index2.js";
import { A as Accordion, a as AccordionItem } from "../../chunks/AccordionItem.js";
import "classnames";
/* empty css                                                    */import { H as Heading } from "../../chunks/Heading.js";
const logo = "/_app/immutable/assets/bsi_green.7d08d391.svg";
function getAllCourse() {
  const modules = /* @__PURE__ */ Object.assign({ "/src/routes/materi/+page.svelte": () => import("./materi/_page.svelte.js"), "/src/routes/materi/1.1.-barter-dan-uang/+page.svelte": () => import("./materi/1.1.-barter-dan-uang/_page.svelte.js"), "/src/routes/materi/1.2.-sejarah-dan-awal-praktik-bank/+page.svelte": () => import("./materi/1.2.-sejarah-dan-awal-praktik-bank/_page.svelte.js"), "/src/routes/materi/1.3.-mengapa-negara-perlu-bank/+page.svelte": () => import("./materi/1.3.-mengapa-negara-perlu-bank/_page.svelte.js"), "/src/routes/materi/1.4.-kehadiran-bank-bagi-masyarakat/+page.svelte": () => import("./materi/1.4.-kehadiran-bank-bagi-masyarakat/_page.svelte.js"), "/src/routes/materi/1.5.-evolusi-perbankan/+page.svelte": () => import("./materi/1.5.-evolusi-perbankan/_page.svelte.js"), "/src/routes/materi/1.6.-masa-depan-bank/+page.svelte": () => import("./materi/1.6.-masa-depan-bank/_page.svelte.js"), "/src/routes/materi/1.7.-integritas-bankir/+page.svelte": () => import("./materi/1.7.-integritas-bankir/_page.svelte.js"), "/src/routes/materi/2.1.-kearifan-lokal/+page.svelte": () => import("./materi/2.1.-kearifan-lokal/_page.svelte.js"), "/src/routes/materi/2.2.-apa-itu-syariah/+page.svelte": () => import("./materi/2.2.-apa-itu-syariah/_page.svelte.js"), "/src/routes/materi/2.3.-bank-syariah/+page.svelte": () => import("./materi/2.3.-bank-syariah/_page.svelte.js"), "/src/routes/materi/2.4.-sejarah-bank-syariah-di-indonesia/+page.svelte": () => import("./materi/2.4.-sejarah-bank-syariah-di-indonesia/_page.svelte.js"), "/src/routes/materi/2.5.-masa-depan-bank-syariah/+page.svelte": () => import("./materi/2.5.-masa-depan-bank-syariah/_page.svelte.js"), "/src/routes/materi/3.1.-genelogi-bangsa-indonesia/+page.svelte": () => import("./materi/3.1.-genelogi-bangsa-indonesia/_page.svelte.js"), "/src/routes/materi/3.2.-hubungan-agama-dan-negara/+page.svelte": () => import("./materi/3.2.-hubungan-agama-dan-negara/_page.svelte.js"), "/src/routes/materi/3.3.-indonesia-rumah-kita/+page.svelte": () => import("./materi/3.3.-indonesia-rumah-kita/_page.svelte.js") });
  let body = [];
  for (let path in modules) {
    let pathSanitized = path.replace("/+page.svelte", "").replace("src/routes/", "");
    body.push({
      title: pathSanitized.replace("/materi/", "").replace(/-/g, " "),
      link: pathSanitized
    });
  }
  return body;
}
function getCourseUnit(filter, arr) {
  return arr.filter((obj) => obj.title.charAt(0) === filter);
}
const unitOne = getCourseUnit("1", getAllCourse());
const unitTwo = getCourseUnit("2", getAllCourse());
const unitThree = getCourseUnit("3", getAllCourse());
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col p-5 text-center my-5"><img${add_attribute("src", logo, 0)} class="h-32 mb-3" alt="Sharia Banking Learn Logo">
	${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      customSize: "text-4xl font-semibold",
      color: "text-bsiyellow",
      class: "mb-5"
    },
    {},
    {
      default: () => {
        return `Energi Baru Untuk Indonesia
	`;
      }
    }
  )}
	</div>

<div class="flex flex-col bg-gray-50 dark:bg-gray-800 content-center p-5 border rounded-lg dark:border-gray-600">${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      multiple: true,
      class: "[&>div]:",
      activeClasses: "font-black bg-bsiyellow dark:bg-bsiyellow text-bsiwhite [&>span>span]:font-bold",
      inactiveClasses: "text-gray-600 dark:text-gray-400 hover:bg-bsiyellow/[0.1]"
    },
    {},
    {
      default: () => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
          header: () => {
            return `<span class="text-base flex gap-1 items-center" slot="header"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				<span class="text-lg">Bank</span></span>`;
          },
          default: () => {
            return `<div class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-bsigreen [&>div>a]:dark:text-bsigreen hover:[&>div>a]:underline hover:[&>div>a]:text-bsigreen">${each(unitOne, (unit) => {
              return `<div><a${add_attribute("href", unit.link, 0)}>${escape(unit.title)}</a>
				</div>`;
            })}</div>`;
          }
        })}
		${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
          header: () => {
            return `<span class="text-base flex gap-1 items-center" slot="header"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				<span class="text-lg">Syariah</span></span>`;
          },
          default: () => {
            return `<div class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-bsigreen [&>div>a]:dark:text-bsigreen hover:[&>div>a]:underline hover:[&>div>a]:text-bsigreen">${each(unitTwo, (unit) => {
              return `<div><a${add_attribute("href", unit.link, 0)}>${escape(unit.title)}</a>
				</div>`;
            })}</div>`;
          }
        })}
		${validate_component(AccordionItem, "AccordionItem").$$render($$result, { open: true }, {}, {
          header: () => {
            return `<span class="text-base flex gap-1 items-center" slot="header"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				<span class="text-lg">Indonesia</span></span>`;
          },
          default: () => {
            return `<div class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-bsigreen [&>div>a]:dark:text-bsigreen hover:[&>div>a]:underline hover:[&>div>a]:text-bsigreen">${each(unitThree, (unit) => {
              return `<div><a${add_attribute("href", unit.link, 0)}>${escape(unit.title)}</a>
				</div>`;
            })}</div>`;
          }
        })}`;
      }
    }
  )}</div>`;
});
export {
  Page as default,
  getAllCourse
};
