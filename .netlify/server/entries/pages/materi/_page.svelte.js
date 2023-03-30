import { c as create_ssr_component, v as validate_component, k as each, h as add_attribute, f as escape } from "../../../chunks/index2.js";
import { A as Accordion, a as AccordionItem } from "../../../chunks/AccordionItem.js";
import "classnames";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../chunks/BreadcrumbItem.js";
import { B as Button } from "../../../chunks/Button.js";
/* empty css                                                       */import { H as Heading } from "../../../chunks/Heading.js";
function getAllCourse() {
  const modules = /* @__PURE__ */ Object.assign({ "./1.1.-barter-dan-uang/+page.svelte": () => import("./1.1.-barter-dan-uang/_page.svelte.js"), "./1.2.-sejarah-dan-awal-praktik-bank/+page.svelte": () => import("./1.2.-sejarah-dan-awal-praktik-bank/_page.svelte.js"), "./1.3.-mengapa-negara-perlu-bank/+page.svelte": () => import("./1.3.-mengapa-negara-perlu-bank/_page.svelte.js"), "./1.4.-kehadiran-bank-bagi-masyarakat/+page.svelte": () => import("./1.4.-kehadiran-bank-bagi-masyarakat/_page.svelte.js"), "./1.5.-evolusi-perbankan/+page.svelte": () => import("./1.5.-evolusi-perbankan/_page.svelte.js"), "./1.6.-masa-depan-bank/+page.svelte": () => import("./1.6.-masa-depan-bank/_page.svelte.js"), "./1.7.-integritas-bankir/+page.svelte": () => import("./1.7.-integritas-bankir/_page.svelte.js"), "./2.1.-kearifan-lokal/+page.svelte": () => import("./2.1.-kearifan-lokal/_page.svelte.js"), "./2.2.-apa-itu-syariah/+page.svelte": () => import("./2.2.-apa-itu-syariah/_page.svelte.js"), "./2.3.-bank-syariah/+page.svelte": () => import("./2.3.-bank-syariah/_page.svelte.js"), "./2.4.-sejarah-bank-syariah-di-indonesia/+page.svelte": () => import("./2.4.-sejarah-bank-syariah-di-indonesia/_page.svelte.js"), "./2.5.-masa-depan-bank-syariah/+page.svelte": () => import("./2.5.-masa-depan-bank-syariah/_page.svelte.js"), "./3.1.-genelogi-bangsa-indonesia/+page.svelte": () => import("./3.1.-genelogi-bangsa-indonesia/_page.svelte.js"), "./3.2.-hubungan-agama-dan-negara/+page.svelte": () => import("./3.2.-hubungan-agama-dan-negara/_page.svelte.js"), "./3.3.-indonesia-rumah-kita/+page.svelte": () => import("./3.3.-indonesia-rumah-kita/_page.svelte.js") });
  let body = [];
  for (let path in modules) {
    let pathSanitized = path.replace("/+page.svelte", "").replace("./", "/");
    let linkPath = "materi" + pathSanitized;
    body.push({
      title: pathSanitized.replace("/", "").replace(/-/g, " "),
      link: linkPath
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
getCourseUnit("4", getAllCourse());
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let items = Array(4).fill(false);
  let trueChecker = (arr) => arr.every((v) => v === true);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Breadcrumb, "Breadcrumb").$$render(
      $$result,
      {
        class: "mb-5",
        "aria-label": "Solid background breadcrumb",
        solid: true
      },
      {},
      {
        default: () => {
          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
            default: () => {
              return `Home`;
            }
          })}
	${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
            default: () => {
              return `Materi`;
            }
          })}`;
        }
      }
    )}

<div class="flex flex-row">${validate_component(Heading, "Heading").$$render(
      $$result,
      {
        tag: "h1",
        class: "mb-5 font-heading",
        color: "text-bsigreen dark:text-bsigreen",
        customSize: "text-3xl font-bold"
      },
      {},
      {
        default: () => {
          return `BSI: Energi Baru untuk Indonesia
	`;
        }
      }
    )}
	${trueChecker(items) ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        outline: true,
        pill: true,
        size: "sm",
        class: "ml-auto mb-5 w-40 border-bsigreen text-bsigreen hover:bg-bsigreen"
      },
      {},
      {
        default: () => {
          return `Tutup Semua`;
        }
      }
    )}` : `${validate_component(Button, "Button").$$render(
      $$result,
      {
        outline: true,
        pill: true,
        size: "sm",
        class: "ml-auto mb-5 w-40 border-bsigreen text-bsigreen hover:bg-bsigreen"
      },
      {},
      {
        default: () => {
          return `Buka Semua`;
        }
      }
    )}`}</div>
<div class="flex flex-col content-center p-5 border rounded-lg dark:border-gray-600 dark:bg-gray-900 ">${validate_component(Accordion, "Accordion").$$render(
      $$result,
      {
        multiple: true,
        activeClasses: "bg-green-100 dark:bg-green-900 text-bsigreen dark:text-bsigreen focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
        inactiveClasses: "text-gray-600 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-gray-800"
      },
      {},
      {
        default: () => {
          return `${validate_component(AccordionItem, "AccordionItem").$$render(
            $$result,
            { open: items[0] },
            {
              open: ($$value) => {
                items[0] = $$value;
                $$settled = false;
              }
            },
            {
              header: () => {
                return `<span class="text-base flex gap-2" slot="header"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				<span class="text-lg">Bank</span></span>`;
              },
              default: () => {
                return `<div class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-bsigreen [&>div>a]:dark:text-bsigreen hover:[&>div>a]:underline hover:[&>div>a]:text-bsigreen">${each(unitOne, (unit) => {
                  return `<div><a${add_attribute("href", unit.link, 0)}>${escape(unit.title)}</a>
				</div>`;
                })}</div>`;
              }
            }
          )}
		${validate_component(AccordionItem, "AccordionItem").$$render(
            $$result,
            { open: items[1] },
            {
              open: ($$value) => {
                items[1] = $$value;
                $$settled = false;
              }
            },
            {
              header: () => {
                return `<span class="text-base flex gap-2" slot="header"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				<span class="text-lg">Syariah</span></span>`;
              },
              default: () => {
                return `<div class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-bsigreen [&>div>a]:dark:text-bsigreen hover:[&>div>a]:underline hover:[&>div>a]:text-bsigreen">${each(unitTwo, (unit) => {
                  return `<div><a${add_attribute("href", unit.link, 0)}>${escape(unit.title)}</a>
				</div>`;
                })}</div>`;
              }
            }
          )}
		${validate_component(AccordionItem, "AccordionItem").$$render(
            $$result,
            { open: items[2] },
            {
              open: ($$value) => {
                items[2] = $$value;
                $$settled = false;
              }
            },
            {
              header: () => {
                return `<span class="text-base flex gap-2" slot="header"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				<span class="text-lg">Indonesia</span></span>`;
              },
              default: () => {
                return `<div class="-mx-1 -my-5 divide-y [&>div>a]:capitalize dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-bsigreen [&>div>a]:dark:text-bsigreen hover:[&>div>a]:underline hover:[&>div>a]:text-bsigreen">${each(unitThree, (unit) => {
                  return `<div><a${add_attribute("href", unit.link, 0)}>${escape(unit.title)}</a>
				</div>`;
                })}</div>`;
              }
            }
          )}`;
        }
      }
    )}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default,
  getAllCourse
};
