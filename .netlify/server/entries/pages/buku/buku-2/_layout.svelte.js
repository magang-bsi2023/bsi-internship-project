import { c as create_ssr_component, i as subscribe, v as validate_component, j as each, f as escape } from "../../../../chunks/index2.js";
import "classnames";
import { B as Button } from "../../../../chunks/Button.js";
/* empty css                                                          */import { N as Navbar, a as NavUl, b as NavLi } from "../../../../chunks/NavUl.js";
import { H as Heading } from "../../../../chunks/Heading.js";
import { p as page } from "../../../../chunks/stores.js";
import { B as Breadcrumbs } from "../../../../chunks/Breadcrumbs.js";
function getBookUnit(filter, arr) {
  return arr.filter((obj) => obj.title.charAt(0) === filter);
}
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  function getAllMateri() {
    const modules = /* @__PURE__ */ Object.assign({ "./+page.svelte": () => import("./_page.svelte.js"), "./1.1.-subtitle1/+page.svelte": () => import("./1.1.-subtitle1/_page.svelte.js"), "./1.2.-subtitle2/+page.svelte": () => import("./1.2.-subtitle2/_page.svelte.js"), "./1.3.-subtitle3/+page.svelte": () => import("./1.3.-subtitle3/_page.svelte.js") });
    let body = [];
    for (let path in modules) {
      let pathSanitized = path.replace("/+page.svelte", "").replace("./", "/");
      let linkPath = $page.url.pathname + pathSanitized;
      body.push({
        title: pathSanitized.replace("/", "").replace(/-/g, " "),
        link: linkPath
      });
    }
    return body.slice(1);
  }
  const unitOne = getBookUnit("1", getAllMateri());
  const unitTwo = getBookUnit("2", getAllMateri());
  const unitThree = getBookUnit("3", getAllMateri());
  $$unsubscribe_page();
  return `${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, { bcClass: "hidden md:block mb-5" }, {}, {})}

<div class="flex flex-col md:flex-row gap-3 sm:gap-5">
	<div class="md:hidden [&>nav]:z-20 [&>nav]:relative">${validate_component(Breadcrumbs, "Breadcrumbs").$$render($$result, {}, {}, {
    content: () => {
      return `<div slot="content" class="[&>nav]:bg-gray-50 [&>nav]:dark:bg-gray-800">${validate_component(Navbar, "Navbar").$$render(
        $$result,
        {
          navClass: "mr-2 capitalize whitespace-nowrap grow-0 dark:border-gray-700 [&>div.container]:h-7\r\n					| [&>div.container>div>ul]:bg-gray-900 [&>div.container>div>ul]:border-0 \r\n					| [&>div.container>div]:absolute [&>div.container>div]:left-0 [&>div.container>div]:-z-10 [&>div.container>div]:px-3 [&>div.container>div]:pb-5 [&>div.container>div]:bg-gray-50 [&>div.container>div]:dark:bg-gray-800 [&>div.container>div]:border-x [&>div.container>div]:border-b [&>div.container>div]:border-gray-200 [&>div.container>div]:dark:border-gray-700 [&>div.container>div]:rounded-b-lg",
          navDivClass: ""
        },
        {},
        {
          default: ({ hidden, toggle }) => {
            return `${validate_component(Button, "Button").$$render($$result, { btnClass: "ml-0 visible md:hidden" }, {}, {
              default: () => {
                return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg>`;
              }
            })}
					${validate_component(NavUl, "NavUl").$$render(
              $$result,
              {
                hidden,
                ulClass: "mt-5 bg-gray-50 dark:bg-gray-800 [&>*]:bg-gray-50 [&>*]:dark:bg-gray-800",
                activeClass: "bg-bsigreen text-white",
                nonActiveClass: ""
              },
              {},
              {
                default: () => {
                  return `${validate_component(Heading, "Heading").$$render(
                    $$result,
                    {
                      tag: "h1",
                      class: "font-bold",
                      color: "text-bsigreen",
                      customSize: "text-lg"
                    },
                    {},
                    {
                      default: () => {
                        return `Bank`;
                      }
                    }
                  )}
						<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-white">${each(unitOne, (course) => {
                    return `${validate_component(NavLi, "NavLi").$$render(
                      $$result,
                      {
                        class: "",
                        active: $page.url.pathname == course.link,
                        href: course.link
                      },
                      {},
                      {
                        default: () => {
                          return `${escape(course.title)}`;
                        }
                      }
                    )}`;
                  })}</div>
						${validate_component(Heading, "Heading").$$render(
                    $$result,
                    {
                      tag: "h1",
                      class: "font-bold",
                      color: "text-bsigreen",
                      customSize: "text-lg"
                    },
                    {},
                    {
                      default: () => {
                        return `Syariah`;
                      }
                    }
                  )}
						<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-gray-200">${each(unitTwo, (course) => {
                    return `${validate_component(NavLi, "NavLi").$$render(
                      $$result,
                      {
                        active: $page.url.pathname == course.link,
                        href: course.link
                      },
                      {},
                      {
                        default: () => {
                          return `${escape(course.title)}`;
                        }
                      }
                    )}`;
                  })}</div>
						${validate_component(Heading, "Heading").$$render(
                    $$result,
                    {
                      tag: "h1",
                      class: "font-bold",
                      color: "text-bsigreen",
                      customSize: "text-lg"
                    },
                    {},
                    {
                      default: () => {
                        return `Indonesia`;
                      }
                    }
                  )}
						<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-gray-200">${each(unitThree, (course) => {
                    return `${validate_component(NavLi, "NavLi").$$render(
                      $$result,
                      {
                        active: $page.url.pathname == course.link,
                        href: course.link
                      },
                      {},
                      {
                        default: () => {
                          return `${escape(course.title)}`;
                        }
                      }
                    )}`;
                  })}</div>`;
                }
              }
            )}`;
          }
        }
      )}</div>`;
    }
  })}
		</div>

	
	<div class="md:flex hidden [&>nav]:bg-gray-50 [&>nav]:dark:bg-gray-800">${validate_component(Navbar, "Navbar").$$render(
    $$result,
    {
      navClass: "capitalize whitespace-nowrap grow-0 px-3 py-3 small:py-5 border border-gray-200 rounded-lg dark:border-gray-700\r\n			| [&>div.container>div>ul]:bg-gray-900 [&>div.container>div>ul]:border-0",
      navDivClass: ""
    },
    {},
    {
      default: ({ hidden }) => {
        return `${validate_component(NavUl, "NavUl").$$render(
          $$result,
          {
            hidden,
            ulClass: "mt-5 bg-gray-50 dark:bg-gray-800 [&>*]:bg-gray-50 [&>*]:dark:bg-gray-800",
            activeClass: "bg-bsigreen text-white",
            nonActiveClass: ""
          },
          {},
          {
            default: () => {
              return `${validate_component(Heading, "Heading").$$render(
                $$result,
                {
                  tag: "h1",
                  class: "font-bold",
                  color: "text-bsigreen",
                  customSize: "text-lg"
                },
                {},
                {
                  default: () => {
                    return `Bank`;
                  }
                }
              )}
				<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-white">${each(unitOne, (course) => {
                return `${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    class: "",
                    active: $page.url.pathname == course.link,
                    href: course.link
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(course.title)}`;
                    }
                  }
                )}`;
              })}</div>
				${validate_component(Heading, "Heading").$$render(
                $$result,
                {
                  tag: "h1",
                  class: "font-bold",
                  color: "text-bsigreen",
                  customSize: "text-lg"
                },
                {},
                {
                  default: () => {
                    return `Syariah`;
                  }
                }
              )}
				<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-gray-200">${each(unitTwo, (course) => {
                return `${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    active: $page.url.pathname == course.link,
                    href: course.link
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(course.title)}`;
                    }
                  }
                )}`;
              })}</div>
				${validate_component(Heading, "Heading").$$render(
                $$result,
                {
                  tag: "h1",
                  class: "font-bold",
                  color: "text-bsigreen",
                  customSize: "text-lg"
                },
                {},
                {
                  default: () => {
                    return `Indonesia`;
                  }
                }
              )}
				<div class="divide-y-2 [&>li]:ml-4 [&>li>a]:py-1 [&>li>a]:px-1 [&>li>a]:dark:text-gray-200">${each(unitThree, (course) => {
                return `${validate_component(NavLi, "NavLi").$$render(
                  $$result,
                  {
                    active: $page.url.pathname == course.link,
                    href: course.link
                  },
                  {},
                  {
                    default: () => {
                      return `${escape(course.title)}`;
                    }
                  }
                )}`;
              })}</div>`;
            }
          }
        )}`;
      }
    }
  )}</div>
	<div class="grow">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Layout as default
};
