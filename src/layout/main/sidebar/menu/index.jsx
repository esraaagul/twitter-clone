import classNames from "classnames";
import { NavLink } from "react-router-dom";
import { mainMenu } from "../../../../utils/consts";

import More from "./more";
import New from "./new";

export default function Menu() {
  return (
    <nav className="mt-0.5 mb-1">
      {mainMenu.map((menu, index) => (
        <NavLink to={menu.path} key={index} className="py-[3px] block group">
          {({ isActive }) => (
            <div
              className={classNames(
                "p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]",
                { "font-bold": isActive }
              )}
            >
              <div className="w-[26.25px] h-[26.25px] relative">
                {menu?.notification && (
                  <span className="w-[18px] h-[18px] text-[11px] rounded-full bg-[#1d9bf0] absolute -right-1 -top-1.5 flex items-center justify-center">
                    {menu?.notification}
                  </span>
                )}

                {!isActive && menu.icon.passive}
                {isActive && menu.icon.active}
              </div>

              <div className="pr-4 text-xl">{menu.title}</div>
            </div>
          )}
        </NavLink>
      ))}
      <More />
      <New />
    </nav>
  );
}
