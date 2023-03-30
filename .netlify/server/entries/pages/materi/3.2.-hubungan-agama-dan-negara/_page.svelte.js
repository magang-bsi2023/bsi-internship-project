import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index2.js";
import "classnames";
/* empty css                                                          */import { P } from "../../../../chunks/P.js";
import { M as MateriLayout, I as Iframe } from "../../../../chunks/Iframe.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(MateriLayout, "MateriLayout").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(P, "P").$$render($$result, {}, {}, {
        default: () => {
          return `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, impedit in. Impedit expedita
		reprehenderit inventore. Placeat unde quibusdam voluptas cum quam? Ut soluta, explicabo numquam
		neque quidem placeat cupiditate fuga?
	`;
        }
      })}
	
	${validate_component(Iframe, "Iframe").$$render(
        $$result,
        {
          title: "video1",
          src: "https://drive.google.com/file/d/1-9ZKjicBRw0ysRC_sjFhi0BUonOz0wIu/preview"
        },
        {},
        {}
      )}
	
	${validate_component(Iframe, "Iframe").$$render(
        $$result,
        {
          title: "interactive1",
          src: "https://augussst.github.io/AS-LuasdanVolume-BangunRuang/"
        },
        {},
        {}
      )}`;
    }
  })}`;
});
export {
  Page as default
};
