import { c as create_ssr_component, a as compute_rest_props, b as spread, e as escape_object, d as escape_attribute_value, i as is_void, v as validate_component } from "../../chunks/index2.js";
import classNames from "classnames";
import { B as Button } from "../../chunks/Button.js";
/* empty css                                                    */const Blockquote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["border", "italic", "borderClass", "bgClass", "bg", "baseClass", "alignment", "size"]);
  let { border = false } = $$props;
  let { italic = true } = $$props;
  let { borderClass = "border-l-4 border-gray-300 dark:border-gray-500" } = $$props;
  let { bgClass = "bg-gray-50 dark:bg-gray-800" } = $$props;
  let { bg = false } = $$props;
  let { baseClass = "font-semibold text-gray-900 dark:text-white" } = $$props;
  let { alignment = "left" } = $$props;
  let alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  let { size = "lg" } = $$props;
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.borderClass === void 0 && $$bindings.borderClass && borderClass !== void 0)
    $$bindings.borderClass(borderClass);
  if ($$props.bgClass === void 0 && $$bindings.bgClass && bgClass !== void 0)
    $$bindings.bgClass(bgClass);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.baseClass === void 0 && $$bindings.baseClass && baseClass !== void 0)
    $$bindings.baseClass(baseClass);
  if ($$props.alignment === void 0 && $$bindings.alignment && alignment !== void 0)
    $$bindings.alignment(alignment);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<blockquote${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(classNames(baseClass, alignmentClasses[alignment], sizes[size], bg && bgClass, border && borderClass, italic && "italic", $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</blockquote>`;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "color", "customSize"]);
  let { tag = "h1" } = $$props;
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { customSize = "" } = $$props;
  const textSizes = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold"
  };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0)
    $$bindings.customSize(customSize);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(classNames(customSize ? customSize : textSizes[tag], color, "w-full", $$props.class))
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)}`;
});
const P = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "color",
    "height",
    "align",
    "justify",
    "italic",
    "firstupper",
    "upperClass",
    "opacity",
    "whitespace",
    "size",
    "space",
    "weight"
  ]);
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { height = "normal" } = $$props;
  let { align = "left" } = $$props;
  let { justify = false } = $$props;
  let { italic = false } = $$props;
  let { firstupper = false } = $$props;
  let { upperClass = "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left" } = $$props;
  let { opacity = void 0 } = $$props;
  let { whitespace = "normal" } = $$props;
  let { size = "base" } = $$props;
  let { space = void 0 } = $$props;
  let { weight = "normal" } = $$props;
  const sizes = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    "2xl": "text-2xl",
    "3xl": "text-3xl",
    "4xl": "text-4xl",
    "5xl": "text-5xl",
    "6xl": "text-6xl",
    "7xl": "text-7xl",
    "8xl": "text-8xl",
    "9xl": "text-9xl"
  };
  const weights = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black"
  };
  const spaces = {
    tighter: "tracking-tighter",
    tight: "tracking-tight",
    normal: "tracking-normal",
    wide: "tracking-wide",
    wider: "tracking-wider",
    widest: "tracking-widest"
  };
  const heights = {
    normal: "leading-normal",
    relaxed: "leading-relaxed",
    loose: "leading-loose"
  };
  const aligns = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const whitespaces = {
    normal: "whitespace-normal",
    nowrap: "whitespace-nowrap",
    pre: "whitespace-pre",
    preline: "whitespace-pre-line",
    prewrap: "whitespace-pre-wrap"
  };
  let colorAndopacity = color.split(" ").map((element) => element.trim()).map((element) => element + "/" + String(opacity)).join(" ");
  let classP = classNames(size && sizes[size], opacity && colorAndopacity || color && color, height && heights[height], weight && weights[weight], space && spaces[space], align && aligns[align], justify && "text-justify", italic && "italic", firstupper && upperClass, whitespace && whitespaces[whitespace], $$props.class);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.firstupper === void 0 && $$bindings.firstupper && firstupper !== void 0)
    $$bindings.firstupper(firstupper);
  if ($$props.upperClass === void 0 && $$bindings.upperClass && upperClass !== void 0)
    $$bindings.upperClass(upperClass);
  if ($$props.opacity === void 0 && $$bindings.opacity && opacity !== void 0)
    $$bindings.opacity(opacity);
  if ($$props.whitespace === void 0 && $$bindings.whitespace && whitespace !== void 0)
    $$bindings.whitespace(whitespace);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.space === void 0 && $$bindings.space && space !== void 0)
    $$bindings.space(space);
  if ($$props.weight === void 0 && $$bindings.weight && weight !== void 0)
    $$bindings.weight(weight);
  return `<p${spread([escape_object($$restProps), { class: escape_attribute_value(classP) }], {})}>${slots.default ? slots.default({}) : ``}</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col p-5 text-center my-10">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h1",
      class: "text-green-600 dark:text-green-600 text-3xl mb-5"
    },
    {},
    {
      default: () => {
        return `Selamat Datang<br>di Sharia Banking Learn
	`;
      }
    }
  )}
	${validate_component(P, "P").$$render($$result, { class: "dark:text-gray-400 text-center" }, {}, {
    default: () => {
      return `Platform edukasi perbankan syariah`;
    }
  })}</div>
<div class="flex flex-col gap-5 text-center [&>div>h2]:text-2xl [&>div>P]:text-center"><div class="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">${validate_component(Heading, "Heading").$$render($$result, { tag: "h2" }, {}, {
    default: () => {
      return `Apa itu sharia banking?`;
    }
  })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Sharia banking atau perbangkan syariah adalah Lorem ipsum dolor sit amet consectetur
			adipisicing elit. Temporibus, explicabo! Voluptatem consectetur maxime est vero, iusto non
			dolores amet molestias, nostrum expedita exercitationem harum earum et unde adipisci ad sequi?`;
    }
  })}</div>
	<div class="p-5 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">${validate_component(Heading, "Heading").$$render($$result, { tag: "h2" }, {}, {
    default: () => {
      return `Mengapa kita harus belajar sharia banking?`;
    }
  })}
		${validate_component(P, "P").$$render($$result, {}, {}, {
    default: () => {
      return `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolores laborum soluta
			perferendis neque. Temporibus officiis laboriosam doloremque, quae atque maxime amet
			laudantium laborum ducimus. Facilis qui tempore unde sapiente!`;
    }
  })}</div></div>

<figure class="mx-auto max-w-screen-md text-center my-5">${validate_component(Blockquote, "Blockquote").$$render(
    $$result,
    {
      class: "mb-3",
      alignment: "center",
      size: "2xl"
    },
    {},
    {
      default: () => {
        return `فَاَوْفُوا الْكَيْلَ وَالْمِيْزَانَ وَلَا تَبْخَسُوا النَّاسَ اَشْيَاۤءَهُمْ
	`;
      }
    }
  )}
	${validate_component(Blockquote, "Blockquote").$$render($$result, { alignment: "center", size: "lg" }, {}, {
    default: () => {
      return `“Sempurnakanlah takaran dan timbangan, dan jangan kamu merugikan orang sedikit pun.”
	`;
    }
  })}
	<figcaption class="flex justify-center items-center mt-3 space-x-3">(Qs. Al’A’raf: 85).
	</figcaption></figure>

<div class="flex flex-col text-center gap-3 md:gap-0 md:text-left md:flex-row items-center my-5 p-5 bg-white dark:bg-gray-800 rounded-lg border-2 border-green-500 dark:border-gray-700 shadow-md">${validate_component(Heading, "Heading").$$render(
    $$result,
    {
      tag: "h3",
      customSize: "text-lg font-bold"
    },
    {},
    {
      default: () => {
        return `Tertarik memahami perbankan syariah lebih lanjut?`;
      }
    }
  )}
	${validate_component(Button, "Button").$$render($$result, { color: "green", href: "/courses" }, {}, {
    default: () => {
      return `Mulai Belajar`;
    }
  })}</div>`;
});
export {
  Page as default
};
