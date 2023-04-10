import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as escape_attribute_value, h as add_attribute, l as compute_slots, i as subscribe, v as validate_component, j as each, f as escape } from "./index2.js";
import classNames from "classnames";
/* empty css                                         */import { p as page } from "./stores.js";
const Breadcrumb = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["solid", "navClass", "solidClass", "olClass"]);
  let { solid = false } = $$props;
  let { navClass = "flex" } = $$props;
  let { solidClass = "flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700" } = $$props;
  let { olClass = "inline-flex items-center space-x-1 md:space-x-3" } = $$props;
  let classNav = solid ? solidClass : navClass;
  if ($$props.solid === void 0 && $$bindings.solid && solid !== void 0)
    $$bindings.solid(solid);
  if ($$props.navClass === void 0 && $$bindings.navClass && navClass !== void 0)
    $$bindings.navClass(navClass);
  if ($$props.solidClass === void 0 && $$bindings.solidClass && solidClass !== void 0)
    $$bindings.solidClass(solidClass);
  if ($$props.olClass === void 0 && $$bindings.olClass && olClass !== void 0)
    $$bindings.olClass(olClass);
  return `<nav${spread(
    [
      { "aria-label": "Breadcrumb" },
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(classNav, $$props.class))
      }
    ],
    {}
  )}><ol${add_attribute("class", classNames(olClass, $$props.classOl), 0)}>${slots.default ? slots.default({}) : ``}</ol></nav>`;
});
const BreadcrumbItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["home", "href", "linkClass", "spanClass", "homeClass"]);
  let $$slots = compute_slots(slots);
  let { home = false } = $$props;
  let { href = void 0 } = $$props;
  let { linkClass = "ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white" } = $$props;
  let { spanClass = "ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400" } = $$props;
  let { homeClass = "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" } = $$props;
  if ($$props.home === void 0 && $$bindings.home && home !== void 0)
    $$bindings.home(home);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.linkClass === void 0 && $$bindings.linkClass && linkClass !== void 0)
    $$bindings.linkClass(linkClass);
  if ($$props.spanClass === void 0 && $$bindings.spanClass && spanClass !== void 0)
    $$bindings.spanClass(spanClass);
  if ($$props.homeClass === void 0 && $$bindings.homeClass && homeClass !== void 0)
    $$bindings.homeClass(homeClass);
  return `<li${spread([{ class: "inline-flex items-center" }, escape_object($$restProps)], {})}>${home ? `<a${add_attribute("class", homeClass, 0)}${add_attribute("href", href, 0)}>${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>`}
      ${slots.default ? slots.default({}) : ``}</a>` : `${$$slots.icon ? `${slots.icon ? slots.icon({}) : ``}` : `<svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>`}
    ${href ? `<a${add_attribute("class", linkClass, 0)}${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>` : `<span${add_attribute("class", spanClass, 0)}>${slots.default ? slots.default({}) : ``}</span>`}`}</li>`;
});
const Breadcrumbs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getPathLevel;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { bcClass } = $$props;
  if ($$props.bcClass === void 0 && $$bindings.bcClass && bcClass !== void 0)
    $$bindings.bcClass(bcClass);
  getPathLevel = () => {
    let pathArr = $page.url.pathname.split("/");
    pathArr[0] = "home";
    let body = [];
    for (let path of pathArr) {
      let linkPath = path.replace("", "/").replace("home", "");
      let title = path.replace(/-/g, " ");
      body.push({ title, link: linkPath });
    }
    for (let i = 2; i < body.length; i++) {
      body[i].link = "/buku" + body[i].link;
    }
    return body.slice(1);
  };
  $$unsubscribe_page();
  return `${validate_component(Breadcrumb, "Breadcrumb").$$render(
    $$result,
    {
      class: bcClass,
      "aria-label": "Solid background breadcrumb",
      solid: true
    },
    {},
    {
      default: () => {
        return `${slots.content ? slots.content({}) : ``}
    ${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render($$result, { href: "/", home: true }, {}, {
          default: () => {
            return `Home`;
          }
        })}
	${each(getPathLevel(), (path) => {
          return `${validate_component(BreadcrumbItem, "BreadcrumbItem").$$render(
            $$result,
            {
              linkClass: "capitalize ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white",
              href: path.link
            },
            {},
            {
              default: () => {
                return `${escape(path.title)}`;
              }
            }
          )}`;
        })}`;
      }
    }
  )}`;
});
export {
  Breadcrumbs as B
};
