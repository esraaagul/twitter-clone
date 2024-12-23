import classNames from "classnames";
import PropTypes from "prop-types";
import { createElement } from "react";

export default function Button({ size, children }) {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#eff3f4] text-[#0f1419] rounded-full flex items-center justify-center font-bold hover:bg-[#d7dbdc] transition-colors",
        {
          "px-4 h-9": size === "normal",
          "px-4 h-[52px] w-full text-[17px]": size === "large",
        }
      ),
    },
    children
  );
}
Button.prototype = {
  size: PropTypes.oneOf(["normal", "large"]),
};

Button.defaultProps = {
  size: "normal",
};
