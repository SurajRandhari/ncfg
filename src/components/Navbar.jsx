import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import Logo from '../assets/Logo/NCFG MINISTRY.webp'


function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between font-taviraj font-medium items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              className="mr-3 h-14"
              alt="Logo"
            />
          </Link>
          <div className={`hidden lg:flex lg:items-center`}>
            <ul className="flex space-x-8 font-medium">
              <li>
                <NavLink
                  to="/"
                  className="text-gray-700 hover:text-orange-700"
                  onClick={closeMenus}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="text-gray-700 hover:text-orange-700"
                  onClick={closeMenus}
                >
                  About
                </NavLink>
              </li>
              <li>
                <div className="relative">
                  <button
                    onClick={toggleSubMenu}
                    className="text-gray-700 hover:text-orange-700 focus:outline-none flex items-center"
                  >
                    Services
                    {/* <FaAngleDown className="ml-1" /> */}
                    <FaAngleDown style={{ transform: isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} className="ml-1" />
                  </button>
                  {isSubMenuOpen && (
                    <ul className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-48">
                      <li>
                        <NavLink
                          to="children-ministry"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={closeMenus}
                        >
                          Children Ministry
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="evangelism"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={closeMenus}
                        >
                          Evangelism
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="youth-ministry"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={closeMenus}
                        >
                          Youth Ministry
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="pastoral-ministry"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={closeMenus}
                        >
                          Pastoral Ministry
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="woman-ministry"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={closeMenus}
                        >
                          Woman Ministry
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="bible-teaching"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={closeMenus}
                        >
                          Bible Teaching
                        </NavLink>
                      </li>
                      {/* <li>
                        <NavLink
                          to="/service2"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={closeMenus}
                        >
                          Service 2
                        </NavLink>
                      </li> */}
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 lg:py-2.5 mr-2 focus:outline-none"
                  onClick={closeMenus}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Mobile menu content */}
          {isMobileMenuOpen && (
            <div className="absolute top-10 right-0 bg-white p-4">
              <ul className="flex flex-col mt-4 font-medium  lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    exact
                    activeClassName="text-orange-700"
                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                    onClick={closeMenus}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    exact
                    activeClassName="text-orange-700"
                    className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0"
                    onClick={closeMenus}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <div className="relative mb-4">
                    <button
                      onClick={toggleSubMenu}
                      className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 focus:outline-none"
                    >
                      Services
                    </button>
                    {isSubMenuOpen && (
                      <ul className="absolute top-10 right-20 mt-2 mb-4 bg-white border border-gray-200 rounded-lg shadow-lg w-48">
                        <li>
                          <NavLink
                            to="children-ministry"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={closeMenus}
                          >
                            Children Ministry
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="evangelism"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={closeMenus}
                          >
                            Evangelism
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="youth-ministry"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={closeMenus}
                          >
                            Youth Ministry
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="pastoral-ministry"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={closeMenus}
                          >
                            Pastoral Ministry
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="woman-ministry"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={closeMenus}
                          >
                            Woman Ministry
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="bible-teaching"
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                            onClick={closeMenus}
                          >
                            Bible Teaching
                          </NavLink>
                        </li>
                       
                      </ul>
                    )}
                  </div>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    onClick={closeMenus}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
