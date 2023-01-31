// import state
import { useState } from "react";

import logo from '../assets/logo.jpg'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="bg-black text-white flex items-center justify-between border-b border-gray-400 py-3 px-3">
      <a href="/" className="flex items-center">
        <img src={logo} alt="logo" width="36rem" className="mx-2" />
        <span className="text-2xl">SpaceX</span>
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 text-white"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] text-white">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Planets</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Rockets</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Capsules</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="#">Upcoming Missions</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="#">Planets</a>
          </li>
          <li>
            <a href="#">Rockets</a>
          </li>
          <li>
            <a href="#">Capsules</a>
          </li>
          <li>
            <a href="#">Upcoming Missions</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 120vh;
        top: 0;
        left: 0;
        background: black;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
      a {
        text-decoration: none;
      }
    `}</style>
    </div>
  );
}

export default Header
