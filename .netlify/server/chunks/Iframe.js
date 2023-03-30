import { c as create_ssr_component, a as compute_rest_props, g as getContext, h as add_attribute, b as spread, e as escape_object, d as escape_attribute_value, f as escape, s as setContext, j as subscribe, v as validate_component } from "./index2.js";
import { p as page } from "./stores.js";
import classNames from "classnames";
import { B as Button } from "./Button.js";
/* empty css                                         */import { B as Breadcrumb, a as BreadcrumbItem } from "./BreadcrumbItem.js";
import { w as writable } from "./index.js";
import { H as Heading } from "./Heading.js";
const TabItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["open", "title", "activeClasses", "inactiveClasses", "defaultClass"]);
  let { open = false } = $$props;
  let { title = "Tab title" } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "inline-block text-sm font-medium text-center disabled:cursor-not-allowed" } = $$props;
  const ctx = getContext("ctx") ?? {};
  ctx.selected ?? writable();
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  buttonClass = classNames(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && "active"
  );
  return `<li${add_attribute("class", classNames("group", $$props.class), 0)} role="presentation"><button${spread(
    [
      { type: "button" },
      { role: "tab" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(buttonClass)
      }
    ],
    {}
  )}>${slots.title ? slots.title({}) : `${escape(title)}`}</button>

  ${open ? `<div class="hidden tab_content_placeholder"><div>${slots.default ? slots.default({}) : ``}</div></div>` : ``}</li>`;
});
const styledActiveClasses = {
  full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white",
  pill: "py-3 px-4 text-white bg-blue-600 rounded-lg",
  underline: "p-4 text-blue-600 border-b-2 border-blue-600 dark:text-blue-500 dark:border-blue-500",
  none: ""
};
const styledInactiveClasses = {
  full: "p-4 w-full group-first:rounded-l-lg group-last:rounded-r-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700",
  pill: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white",
  underline: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400",
  none: ""
};
const Tabs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let ulClass;
  let { style = "none" } = $$props;
  let { defaultClass = "flex flex-wrap space-x-2" } = $$props;
  let { contentClass = "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4" } = $$props;
  let { divider = true } = $$props;
  let { activeClasses = "p-4 text-blue-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-blue-500" } = $$props;
  let { inactiveClasses = "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300" } = $$props;
  const ctx = {
    activeClasses: styledActiveClasses[style] || activeClasses,
    inactiveClasses: styledInactiveClasses[style] || inactiveClasses,
    selected: writable()
  };
  setContext("ctx", ctx);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.contentClass === void 0 && $$bindings.contentClass && contentClass !== void 0)
    $$bindings.contentClass(contentClass);
  if ($$props.divider === void 0 && $$bindings.divider && divider !== void 0)
    $$bindings.divider(divider);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  divider = ["full", "pill"].includes(style) ? false : divider;
  ulClass = classNames(defaultClass, style === "underline" && "-mb-px", $$props.class);
  return `<ul${add_attribute("class", ulClass, 0)}>${slots.default ? slots.default({ style }) : ``}</ul>
${divider ? `${slots.divider ? slots.divider({ style }) : `
    <div class="h-px bg-gray-200 dark:bg-gray-700"></div>
  `}` : ``}
<div${add_attribute("class", contentClass, 0)} role="tabpanel" aria-labelledby="id-tab"></div>`;
});
function getAllCourseLink() {
  const modules = /* @__PURE__ */ Object.assign({ "/src/routes/materi/+page.svelte": () => import("../entries/pages/materi/_page.svelte.js"), "/src/routes/materi/1.1.-barter-dan-uang/+page.svelte": () => import("../entries/pages/materi/1.1.-barter-dan-uang/_page.svelte.js"), "/src/routes/materi/1.2.-sejarah-dan-awal-praktik-bank/+page.svelte": () => import("../entries/pages/materi/1.2.-sejarah-dan-awal-praktik-bank/_page.svelte.js"), "/src/routes/materi/1.3.-mengapa-negara-perlu-bank/+page.svelte": () => import("../entries/pages/materi/1.3.-mengapa-negara-perlu-bank/_page.svelte.js"), "/src/routes/materi/1.4.-kehadiran-bank-bagi-masyarakat/+page.svelte": () => import("../entries/pages/materi/1.4.-kehadiran-bank-bagi-masyarakat/_page.svelte.js"), "/src/routes/materi/1.5.-evolusi-perbankan/+page.svelte": () => import("../entries/pages/materi/1.5.-evolusi-perbankan/_page.svelte.js"), "/src/routes/materi/1.6.-masa-depan-bank/+page.svelte": () => import("../entries/pages/materi/1.6.-masa-depan-bank/_page.svelte.js"), "/src/routes/materi/1.7.-integritas-bankir/+page.svelte": () => import("../entries/pages/materi/1.7.-integritas-bankir/_page.svelte.js"), "/src/routes/materi/2.1.-kearifan-lokal/+page.svelte": () => import("../entries/pages/materi/2.1.-kearifan-lokal/_page.svelte.js"), "/src/routes/materi/2.2.-apa-itu-syariah/+page.svelte": () => import("../entries/pages/materi/2.2.-apa-itu-syariah/_page.svelte.js"), "/src/routes/materi/2.3.-bank-syariah/+page.svelte": () => import("../entries/pages/materi/2.3.-bank-syariah/_page.svelte.js"), "/src/routes/materi/2.4.-sejarah-bank-syariah-di-indonesia/+page.svelte": () => import("../entries/pages/materi/2.4.-sejarah-bank-syariah-di-indonesia/_page.svelte.js"), "/src/routes/materi/2.5.-masa-depan-bank-syariah/+page.svelte": () => import("../entries/pages/materi/2.5.-masa-depan-bank-syariah/_page.svelte.js"), "/src/routes/materi/3.1.-genelogi-bangsa-indonesia/+page.svelte": () => import("../entries/pages/materi/3.1.-genelogi-bangsa-indonesia/_page.svelte.js"), "/src/routes/materi/3.2.-hubungan-agama-dan-negara/+page.svelte": () => import("../entries/pages/materi/3.2.-hubungan-agama-dan-negara/_page.svelte.js"), "/src/routes/materi/3.3.-indonesia-rumah-kita/+page.svelte": () => import("../entries/pages/materi/3.3.-indonesia-rumah-kita/_page.svelte.js") });
  let body = [];
  for (let path in modules) {
    let pathSanitized = path.replace("/+page.svelte", "").replace("/src/routes/", "/");
    body.push({ title: pathSanitized });
  }
  let linkArr = body.map((titles) => titles.title);
  return linkArr;
}
const PageNav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const currentLink = $page.url.pathname;
  const indexOfCurrentLink = getAllCourseLink().indexOf(currentLink);
  function getNextLink() {
    const IndexOfNextLink = indexOfCurrentLink + 1;
    return getAllCourseLink()[IndexOfNextLink];
  }
  function getPrevLink() {
    const IndexOfPrevLink = indexOfCurrentLink - 1;
    return getAllCourseLink()[IndexOfPrevLink];
  }
  $$unsubscribe_page();
  return `<div class="flex justify-around">${getPrevLink() !== "/materi" ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: getPrevLink(),
      class: "bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
    },
    {},
    {
      default: () => {
        return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"></path></svg>
		Materi Sebelumnya
	`;
      }
    }
  )}` : ``}
	${getNextLink() !== void 0 ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      href: getNextLink(),
      class: "bg-green-500 hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600"
    },
    {},
    {
      default: () => {
        return `Materi Selanjutnya
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-1"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg>`;
      }
    }
  )}` : ``}</div>`;
});
const PageTitle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  function pageTitle() {
    if ($page.error)
      return $page.status;
    if ($page.url.pathname === "/")
      return "Home";
    const title = $page.url.pathname.split("/").pop().replace(/-/g, " ");
    const capilized = title.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(" ");
    return String(capilized) || "";
  }
  $$unsubscribe_page();
  return `${escape(pageTitle())}`;
});
const BcCourse = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Breadcrumb, "Breadcrumb").$$render(
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
    ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/materi" }, {}, {
          default: () => {
            return `Materi`;
          }
        })}
    ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(PageTitle, "PageTitle").$$render($$result, {}, {}, {})}`;
          }
        })}`;
      }
    }
  )}`;
});
const Evaluasi = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  return `<div class="border rounded-lg border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 py-5 px-2 mb-5"><div class="relative w-full h-screen"><iframe title="evaluasi" class="absolute w-full h-full"${add_attribute("src", src, 0)}>Loading…</iframe></div></div>`;
});
const MateriLayout_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "button.active{color:rgb(22 163 74) !important;border-color:rgb(22 163 74) !important;background-color:rgb(22, 163, 74, 0.1) !important;border-radius:0.5rem 0.5rem 0 0}",
  map: null
};
const MateriLayout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { linkEvaluasi } = $$props;
  if ($$props.linkEvaluasi === void 0 && $$bindings.linkEvaluasi && linkEvaluasi !== void 0)
    $$bindings.linkEvaluasi(linkEvaluasi);
  $$result.css.add(css$1);
  return `${validate_component(BcCourse, "BcCourse").$$render($$result, {}, {}, {})}


<div class="[&>:nth-child(3)]:bg-transparent [&>:nth-child(3)]:dark:bg-transparent [&>:nth-child(3)]:mt-0 [&>:nth-child(3)]:px-0">${validate_component(Tabs, "Tabs").$$render(
    $$result,
    {
      style: "underline",
      activeClasses: "text-bsigreen"
    },
    {},
    {
      default: () => {
        return `${validate_component(TabItem, "TabItem").$$render($$result, { open: true }, {}, {
          title: () => {
            return `<div slot="title" class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				Materi
			</div>`;
          },
          default: () => {
            return `${validate_component(Heading, "Heading").$$render(
              $$result,
              {
                tag: "h1",
                customSize: "text-2xl",
                class: "capitalize text-bsigreen font-bold dark:text-bsigreen mb-1"
              },
              {},
              {
                default: () => {
                  return `${validate_component(PageTitle, "PageTitle").$$render($$result, {}, {}, {})}`;
                }
              }
            )}
			${slots.default ? slots.default({}) : ``}
			<div class="flex justify-center">${validate_component(Button, "Button").$$render(
              $$result,
              {
                size: "xl",
                class: "flex gap-1 w-1/4 bg-green-600"
              },
              {},
              {
                default: () => {
                  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg>
					Quiz
				`;
                }
              }
            )}</div>`;
          }
        })}
		${validate_component(TabItem, "TabItem").$$render($$result, {}, {}, {
          title: () => {
            return `<div slot="title" class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path></svg>
			Quiz
		</div>`;
          },
          default: () => {
            return `${validate_component(Evaluasi, "Evaluasi").$$render($$result, { title: "evaluasi", src: linkEvaluasi }, {}, {})}
		${validate_component(PageNav, "PageNav").$$render($$result, {}, {}, {})}`;
          }
        })}`;
      }
    }
  )}
</div>`;
});
const Iframe_svelte_svelte_type_style_lang = "";
const css = {
  code: ".video-container.svelte-169gp15{max-width:1250px;margin-inline:auto;padding:1.5rem}.iframe-container.svelte-169gp15{position:relative;overflow:hidden;width:100%;padding-top:56.25%}.responsive-iframe.svelte-169gp15{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%}",
  map: null
};
const Iframe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { src } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css);
  return `<div class="video-container my-5 border bg-gray-50 dark:bg-gray-800 rounded-lg border-gray-200 dark:border-gray-700 svelte-169gp15"><div class="iframe-container svelte-169gp15"><iframe${add_attribute("title", title, 0)} class="responsive-iframe svelte-169gp15"${add_attribute("src", src, 0)}></iframe></div>
</div>`;
});
export {
  Iframe as I,
  MateriLayout as M
};
