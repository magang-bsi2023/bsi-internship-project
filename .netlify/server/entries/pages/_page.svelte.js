import { c as create_ssr_component, a as compute_rest_props, s as setContext, b as spread, e as escape_object, d as escape_attribute_value, k as is_void, g as getContext, v as validate_component, f as escape, h as add_attribute, l as compute_slots, i as subscribe, o as onDestroy } from "../../chunks/index2.js";
import classNames from "classnames";
import { B as Button } from "../../chunks/Button.js";
/* empty css                                                    */import { H as Heading } from "../../chunks/Heading.js";
import { P } from "../../chunks/P.js";
import { l as logo } from "../../chunks/bsilib.js";
import { s as searchHandler, c as createSearchStore } from "../../chunks/search.js";
const ButtonGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "divClass"]);
  let { size = "md" } = $$props;
  let { divClass = "inline-flex rounded-lg shadow-sm" } = $$props;
  setContext("group", { size });
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.divClass === void 0 && $$bindings.divClass && divClass !== void 0)
    $$bindings.divClass(divClass);
  return `<div${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(divClass, $$props.class))
      },
      { role: "group" }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Wrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "show", "use"]);
  let { tag = "div" } = $$props;
  let { show } = $$props;
  let { use = () => {
  } } = $$props;
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  return `${show ? `${((tag$1) => {
    return tag$1 ? `<${tag}${spread([escape_object($$restProps)], {})}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}` : `${slots.default ? slots.default({}) : ``}`}`;
});
function clampSize(s) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
let floatClass = "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400";
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let $$restProps = compute_rest_props($$props, ["type", "value", "size", "defaultClass", "color"]);
  let $$slots = compute_slots(slots);
  let { type = "text" } = $$props;
  let { value = "" } = $$props;
  let { size = void 0 } = $$props;
  let { defaultClass = "block w-full disabled:cursor-not-allowed disabled:opacity-50" } = $$props;
  let { color = "base" } = $$props;
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500",
    green: "border-green-500 dark:border-green-400",
    red: "border-red-500 dark:border-red-400"
  };
  const ringClasses = {
    base: "focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500",
    green: "focus:ring-green-500 focus:border-green-500 dark:focus:border-green-500 dark:focus:ring-green-500",
    red: "focus:ring-red-500 focus:border-red-500 dark:focus:ring-red-500 dark:focus:border-red-500"
  };
  const colorClasses = {
    base: "bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
    tinted: "bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
    green: "bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700",
    red: "bg-red-50 text-red-900 placeholder-red-700 dark:text-red-500 dark:placeholder-red-500 dark:bg-gray-700"
  };
  let background = getContext("background");
  let group = getContext("group");
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const leftPadding = { sm: "pl-9", md: "pl-10", lg: "pl-11" };
  const rightPadding = { sm: "pr-9", md: "pr-10", lg: "pr-11" };
  const inputPadding = { sm: "p-2", md: "p-2.5", lg: "p-4" };
  let inputClass;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  _size = size || clampSize(group?.size) || "md";
  {
    {
      const _color = color === "base" && background ? "tinted" : color;
      inputClass = classNames(defaultClass, $$slots.left && leftPadding[_size], $$slots.right && rightPadding[_size], ringClasses[color], colorClasses[_color], borderClasses[_color], inputPadding[_size], textSizes[_size], group || "rounded-lg", group && "first:rounded-l-lg last:rounded-r-lg", group && "border-l-0 first:border-l last:border-r", $$props.class);
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render(
    $$result,
    {
      class: "relative w-full",
      show: $$slots.left || $$slots.right
    },
    {},
    {
      default: () => {
        return `${$$slots.left ? `<div class="${escape(floatClass, true) + " left-0 pl-2.5 pointer-events-none"}">${slots.left ? slots.left({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}
  ${slots.default ? slots.default({
          props: { ...$$restProps, class: inputClass }
        }) : `
    <input${spread(
          [
            escape_object($$restProps),
            {
              class: escape_attribute_value(inputClass)
            }
          ],
          {}
        )}${add_attribute("value", value, 0)}>
  `}
  ${$$slots.right ? `<div class="${escape(floatClass, true) + " right-0 pr-2.5"}">${slots.right ? slots.right({
          props: { ...$$restProps, class: inputClass }
        }) : ``}</div>` : ``}`;
      }
    }
  )}`;
});
const InputAddon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let _size;
  let divClass;
  let $$restProps = compute_rest_props($$props, ["size"]);
  let { size = void 0 } = $$props;
  let background = getContext("background");
  let group = getContext("group");
  const borderClasses = {
    base: "border-gray-300 dark:border-gray-600",
    tinted: "border-gray-300 dark:border-gray-500"
  };
  const darkBgClasses = {
    base: "dark:bg-gray-600 dark:text-gray-400",
    tinted: "dark:bg-gray-500 dark:text-gray-300"
  };
  const divider = {
    base: "dark:border-r-gray-700 dark:last:border-r-gray-600",
    tinted: "dark:border-r-gray-600 dark:last:border-r-gray-500"
  };
  const textSizes = {
    sm: "sm:text-xs",
    md: "text-sm",
    lg: "sm:text-base"
  };
  const prefixPadding = { sm: "px-2", md: "px-3", lg: "px-4" };
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  _size = size || clampSize(group?.size) || "md";
  divClass = classNames(
    textSizes[_size],
    prefixPadding[_size],
    background ? borderClasses["tinted"] : borderClasses["base"],
    "text-gray-500 bg-gray-200",
    background ? darkBgClasses.tinted : darkBgClasses.base,
    background ? divider.tinted : divider.base,
    "inline-flex items-center border-t border-b first:border-l border-r",
    "first:rounded-l-lg last:rounded-r-lg",
    $$props.class
  );
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(divClass) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
function getBuku() {
  const modules = /* @__PURE__ */ Object.assign({ "/src/lib/assets/book-cover/buku-2.jpg": () => import("../../chunks/buku-2.js"), "/src/lib/assets/book-cover/energi-baru-untuk-indonesia.jpg": () => import("../../chunks/energi-baru-untuk-indonesia.js"), "/src/routes/buku/buku-2/+page.svelte": () => import("./buku/buku-2/_page.svelte.js"), "/src/routes/buku/energi-baru-untuk-indonesia/+page.svelte": () => import("./buku/energi-baru-untuk-indonesia/_page.svelte.js") });
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
  let { data } = $$props;
  const searchBuku = getBuku().map((buku) => ({ ...buku, searchTerms: `${buku.title}` }));
  const searchStore = createSearchStore(searchBuku);
  $$unsubscribe_searchStore = subscribe(searchStore, (value) => $searchStore = value);
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));
  onDestroy(() => {
    unsubscribe();
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="flex flex-col p-5 text-center my-5"><img${add_attribute("src", logo, 0)} class="h-32 mb-3" alt="${escape(data.page.title, true) + " Logo"}">
	${validate_component(Heading, "Heading").$$render(
      $$result,
      {
        tag: "h1",
        customSize: "text-4xl font-semibold",
        color: "text-bsiyellow"
      },
      {},
      {
        default: () => {
          return `${escape(data.page.title)}`;
        }
      }
    )}</div>



<div class="my-5">${validate_component(ButtonGroup, "ButtonGroup").$$render($$result, { class: "w-full" }, {}, {
      default: () => {
        return `${validate_component(InputAddon, "InputAddon").$$render($$result, {}, {}, {
          default: () => {
            return `<svg class="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>`;
          }
        })}
	${validate_component(Input, "Input").$$render(
          $$result,
          {
            size: "lg",
            type: "search",
            placeholder: "Cari buku...",
            defaultClass: "block w-full disabled:cursor-not-allowed disabled:opacity-50 focus:border-bsigreen focus:ring-bsigreen dark:focus:border-bsigreen dark:focus:ring-bsigreen bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 p-4 sm:text-base size first:rounded-l-lg last:rounded-r-lg border-l-0 first:border-l last:border-r",
            value: $searchStore.search
          },
          {
            value: ($$value) => {
              $searchStore.search = $$value;
              $$settled = false;
            }
          },
          {}
        )}
	${validate_component(Button, "Button").$$render(
          $$result,
          {
            color: "",
            class: "bg-bsigreen text-white hover:bg-bsidgreen"
          },
          {},
          {
            default: () => {
              return `Cari
	`;
            }
          }
        )}`;
      }
    })}</div>



<div class="flex flex-col items-center">${validate_component(P, "P").$$render($$result, { class: "mb-5" }, {}, {
      default: () => {
        return `atau`;
      }
    })}
	${validate_component(Button, "Button").$$render(
      $$result,
      {
        pill: true,
        size: "lg",
        href: "/buku",
        color: "",
        class: "mx-auto border-2 border-bsigreen bg-bsigreen hover:bg-bsidgreen hover:border-bsiyellow text-white"
      },
      {},
      {
        default: () => {
          return `Lihat Daftar Buku
	`;
        }
      }
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_searchStore();
  return $$rendered;
});
export {
  Page as default
};
