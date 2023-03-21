import { c as create_ssr_component, s as setContext, v as validate_component, a as compute_rest_props, b as spread, d as escape_attribute_value, e as escape_object, g as getContext, j as subscribe, h as add_attribute } from "../../../chunks/index2.js";
import { w as writable } from "../../../chunks/index.js";
import { F as Frame } from "../../../chunks/Frame.js";
import classNames from "classnames";
import { B as Breadcrumb, a as BreadcrumbItem } from "../../../chunks/BreadcrumbItem.js";
/* empty css                                                       */const Accordion = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { multiple = false } = $$props;
  let { flush = false } = $$props;
  let { activeClasses = "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800" } = $$props;
  let { inactiveClasses = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800" } = $$props;
  let { defaultClass = "text-gray-500 dark:text-gray-400" } = $$props;
  const ctx = {
    flush,
    activeClasses,
    inactiveClasses,
    selected: multiple ? void 0 : writable()
  };
  setContext("ctx", ctx);
  let frameClass = classNames(defaultClass, "divide-y divide-gray-200 dark:divide-gray-700", "border-gray-200 dark:border-gray-700", "rounded-t-xl", $$props.class);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.flush === void 0 && $$bindings.flush && flush !== void 0)
    $$bindings.flush(flush);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  return `${validate_component(Frame, "Frame").$$render(
    $$result,
    {
      class: frameClass,
      color: "none",
      border: !flush
    },
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const ChevronDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M19.5 8.25L12 15.75L4.5 8.25" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5303 16.2803C12.2374 16.5732 11.7626 16.5732 11.4697 16.2803L3.96967 8.78033C3.67678 8.48744 3.67678 8.01256 3.96967 7.71967C4.26256 7.42678 4.73744 7.42678 5.03033 7.71967L12 14.6893L18.9697 7.71967C19.2626 7.42678 19.7374 7.42678 20.0303 7.71967C20.3232 8.01256 20.3232 8.48744 20.0303 8.78033L12.5303 16.2803Z" fill="${color}"/> `;
  let { ariaLabel = "chevron down" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const ChevronUp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "variation", "ariaLabel"]);
  let { size = "24" } = $$props;
  let { color = "currentColor" } = $$props;
  let { variation = "outline" } = $$props;
  let viewBox;
  let svgpath;
  let svgoutline = `<path d="M4.5 15.75L12 8.25L19.5 15.75" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
  let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4697 7.71967C11.7626 7.42678 12.2374 7.42678 12.5303 7.71967L20.0303 15.2197C20.3232 15.5126 20.3232 15.9874 20.0303 16.2803C19.7374 16.5732 19.2626 16.5732 18.9697 16.2803L12 9.31066L5.03033 16.2803C4.73744 16.5732 4.26256 16.5732 3.96967 16.2803C3.67678 15.9874 3.67678 15.5126 3.96967 15.2197L11.4697 7.71967Z" fill="${color}"/> `;
  let { ariaLabel = "chevron up" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variation === void 0 && $$bindings.variation && variation !== void 0)
    $$bindings.variation(variation);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  {
    switch (variation) {
      case "outline":
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
        break;
      case "solid":
        svgpath = svgsolid;
        viewBox = "0 0 24 24";
        break;
      default:
        svgpath = svgoutline;
        viewBox = "0 0 24 24";
    }
  }
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      {
        class: escape_attribute_value($$props.class)
      },
      escape_object($$restProps),
      {
        "aria-label": escape_attribute_value(ariaLabel)
      },
      { fill: "none" },
      { viewBox: escape_attribute_value(viewBox) },
      { "stroke-width": "2" }
    ],
    {}
  )}><!-- HTML_TAG_START -->${svgpath}<!-- HTML_TAG_END --></svg>`;
});
const AccordionItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selected;
  let { open = false } = $$props;
  let { activeClasses = void 0 } = $$props;
  let { inactiveClasses = void 0 } = $$props;
  let { defaultClass = "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl" } = $$props;
  let { transitionType = "slide" } = $$props;
  let { transitionParams = {} } = $$props;
  const ctx = getContext("ctx") ?? {};
  const selected = ctx.selected ?? writable();
  $$unsubscribe_selected = subscribe(selected, (value) => value);
  open = false;
  let buttonClass;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.activeClasses === void 0 && $$bindings.activeClasses && activeClasses !== void 0)
    $$bindings.activeClasses(activeClasses);
  if ($$props.inactiveClasses === void 0 && $$bindings.inactiveClasses && inactiveClasses !== void 0)
    $$bindings.inactiveClasses(inactiveClasses);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.transitionType === void 0 && $$bindings.transitionType && transitionType !== void 0)
    $$bindings.transitionType(transitionType);
  if ($$props.transitionParams === void 0 && $$bindings.transitionParams && transitionParams !== void 0)
    $$bindings.transitionParams(transitionParams);
  buttonClass = classNames(
    defaultClass,
    ctx.flush ? "py-5" : "p-5",
    open && (ctx.flush ? "text-gray-900 dark:text-white" : activeClasses || ctx.activeClasses),
    !open && (ctx.flush ? "text-gray-500 dark:text-gray-400" : inactiveClasses || ctx.inactiveClasses),
    $$props.class
  );
  $$unsubscribe_selected();
  return `<h2 class="group"><button type="button"${add_attribute("class", buttonClass, 0)}${add_attribute("aria-expanded", open, 0)}>${slots.header ? slots.header({}) : ``}
    ${open ? `${slots.arrowup ? slots.arrowup({}) : `${validate_component(ChevronUp, "ChevronUp").$$render($$result, {}, {}, {})}`}` : `${slots.arrowdown ? slots.arrowdown({}) : `${validate_component(ChevronDown, "ChevronDown").$$render($$result, {}, {}, {})}`}`}</button></h2>
${open ? `<div><div${add_attribute("class", ctx.flush ? "py-5" : "p-5", 0)}>${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
	${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, {}, {}, {
          default: () => {
            return `Courses`;
          }
        })}`;
      }
    }
  )}

<div class="flex flex-col content-center p-5 border rounded-lg dark:border-gray-600 dark:bg-gray-900"><h1 class="mb-5 text-2xl font-bold text-green-500">Daftar Course</h1>
	${validate_component(Accordion, "Accordion").$$render(
    $$result,
    {
      multiple: true,
      activeClasses: "bg-green-100 dark:bg-gray-800 text-green-600 dark:text-green-500 focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",
      inactiveClasses: "text-gray-600 dark:text-gray-400 hover:bg-green-100 dark:hover:bg-gray-800"
    },
    {},
    {
      default: () => {
        return `${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "" }, {}, {
          header: () => {
            return `<span class="text-base flex gap-2" slot="header"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				<span class="text-lg">Pendahuluan</span></span>`;
          },
          default: () => {
            return `<div class="-mx-1 -my-5 divide-y dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-500 hover:[&>div>a]:underline hover:[&>div>a]:text-green-500"><div><a href="/courses/1.1.asal-hukum-syariah">1.1. Asal Hukum Syariah</a></div>
				<div><a href="/courses/judul2">Judul 2</a></div>
				<div><a href="/courses/judul3">Judul 3</a></div></div>`;
          }
        })}
		${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "" }, {}, {
          header: () => {
            return `<span class="text-base flex gap-2" slot="header"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				<span class="text-lg">Implementasi Hukum Syariah di Perbankan</span></span>`;
          },
          default: () => {
            return `<div class="-mx-1 -my-5 divide-y dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-500 hover:[&>div>a]:underline"><div><a href="/courses/judul1">Judul 1</a></div>
				<div><a href="/courses/judul2">Judul 2</a></div>
				<div><a href="/courses/judul3">Judul 3</a></div></div>`;
          }
        })}
		${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "" }, {}, {
          header: () => {
            return `<span class="text-base flex gap-2" slot="header"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				<span class="text-lg">Perbedaan Perbankan Syariah dan Perbankan Konvensional</span></span>`;
          },
          default: () => {
            return `<div class="-mx-1 -my-5 divide-y dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-500 hover:[&>div>a]:underline"><div><a href="/courses/judul1">Judul 1</a></div>
				<div><a href="/courses/judul2">Judul 2</a></div>
				<div><a href="/courses/judul3">Judul 3</a></div></div>`;
          }
        })}
		${validate_component(AccordionItem, "AccordionItem").$$render($$result, { class: "" }, {}, {
          header: () => {
            return `<span class="text-base flex gap-2" slot="header"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg>
				<span class="text-lg">Produk Perbankan Syariah</span></span>`;
          },
          default: () => {
            return `<div class="-mx-1 -my-5 divide-y dark:divide-gray-500 [&>*]:py-3 [&>div>a]:text-green-500 hover:[&>div>a]:underline"><div><a href="/courses/judul1">Judul 1</a></div>
				<div><a href="/courses/judul2">Judul 2</a></div>
				<div><a href="/courses/judul3">Judul 3</a></div></div>`;
          }
        })}`;
      }
    }
  )}
</div>`;
});
export {
  Page as default
};
