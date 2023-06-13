import React from "react";

function Header() {
  return (
    <header className="bg-indigo-300">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white"
            style={{ fontSize: 18 }}
          >
            STATISTIC
          </a>
        </div>
        <div className="flex lg:flex-1">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-white"
            style={{ fontSize: 18 }}
          >
            USER
          </a>
        </div>
        <div className="flex lg:flex-1">
          <a
            href="#"
            style={{ fontSize: 18 }}
            className="text-sm font-semibold leading-6 text-white"
          >
            CMS
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
