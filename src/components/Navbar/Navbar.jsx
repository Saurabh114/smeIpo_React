import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Outlet, NavLink, Link } from "react-router-dom";

import Logo from "./../../assets/smeipo.png";

const navigation = [
  { name: "Home", to: "/"},
  { name: "IPO", to: "/ipo"},
  { name: "Services", to: "/service"},
  { name: "Contact", to: "/contact"},
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <>
      <Disclosure as="nav" className="bg-white sticky top-0 z-50 shadow-xl">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-between rounded-md p-2 bg-gray-700 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
            <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img alt="SME IPO Logo" src={Logo} className="h-8 w-auto" />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className={({ isActive }) =>
                        ` ${
                          isActive ? "bg-gray-900 text-white" : " text-black"
                        } text-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 text-base font-semibold`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                ` ${
                  isActive ? "bg-gray-900 text-white"
                    : "text-black hover:bg-gray-700 hover:text-white"}
                  block rounded-md px-3 py-2 text-base font-medium w-fit`}
               
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
};

export default Navbar;
