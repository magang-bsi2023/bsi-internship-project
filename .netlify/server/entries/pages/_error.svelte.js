import { c as create_ssr_component, j as subscribe, v as validate_component, f as escape } from "../../chunks/index2.js";
import "classnames";
import { B as Button } from "../../chunks/Button.js";
/* empty css                                                    */import { H as Heading } from "../../chunks/Heading.js";
import { P } from "../../chunks/P.js";
import { p as page } from "../../chunks/stores.js";
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="flex flex-col justify-center text-center mt-16"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-52 h-52 mx-auto text-bsiyellow"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"></path></svg>      
    ${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      class: "mb-3",
      tag: "h1",
      customSize: "text-2xl"
    },
    {},
    {
      default: () => {
        return `Terjadi Kesalahan`;
      }
    }
  )}
    ${validate_component(P, "P").$$render($$result, { class: "text-center mb-5" }, {}, {
    default: () => {
      return `Error: ${escape($page.error.message)}`;
    }
  })}
    ${validate_component(Button, "Button").$$render($$result, { class: "mx-auto bg-bsigreen", href: "/" }, {}, {
    default: () => {
      return `Home`;
    }
  })}</div>`;
});
export {
  Error as default
};
