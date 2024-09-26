import { Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <Navbar
      className="py-5 fixed left-0 right-0 top-0 z-50"
      fluid
      rounded
      dir="ltr"
    >
      <Link to={"/"} className="flex items-center">
        <img
          src="https://images.vexels.com/media/users/3/295503/isolated/lists/47d366ddc3b197d3fcf6c1d7f4cdf2fd-medicine-scrub-cut-out-icon.png"
          className="mr-1 h-6 sm:h-9"
          alt="Flowbite"
        />
        <span className="self-center whitespace-nowrap font-semibold dark:text-white">
          Scrubs egypt
        </span>
      </Link>
      <Navbar.Toggle />
      <Navbar.Collapse dir="rtl">
        <NavLink
          className="px-3 py-2 text-center m-[3px!important] nav-link"
          to={"/"}
        >
          الرئيسية
        </NavLink>
        <NavLink
          className="px-3 py-2 text-center m-[3px!important] nav-link"
          to={"/men"}
        >
          المنتجات الرجالي
        </NavLink>
        <NavLink
          className="px-3 py-2 text-center m-[3px!important] nav-link"
          to={"/women"}
        >
          المنتجات النسائي
        </NavLink>
        <NavLink
          className="px-3 py-2 text-center m-[3px!important] nav-link"
          to={"/products"}
        >
          جميع المنتجات
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  );
}
