import { FaTwitter, FaFacebook, FaInstagram, FaSnapchat } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="relative bg-black pt-8 pb-6 text-white">
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl fonat-semibold text-blueGray-700">
              Know more about SpaceX
            </h4>
            <h5 class="text-lg mt-0 mb-2 text-blueGray-600">Follow us below</h5>
            <div class="mt-6 lg:mb-0 mb-6 flex">
              <button
                class="bg-black text-lightBlue-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="text-blue-700">
                  <FaTwitter />
                </i>
              </button>
              <button
                class="bg-black text-lightBlue-600 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="text-blue-700">
                  <FaFacebook />
                </i>
              </button>
              <button
                class="bg-black text-pink-400 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="text-red-700">
                  <FaInstagram />
                </i>
              </button>
              <button
                class="bg-black text-blueGray-800 shadow-lg font-normal h-10 w-10 flex items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="text-yellow-600">
                  <FaSnapchat />
                </i>
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Company
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Documents
                    </a>
                  </li>
                </ul>
              </div>
              <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      NASA Coordination
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href="#"
                class="text-blueGray-500 hover:text-gray-800"
                target="_blank"
              />
              SpaceX
              <a
                href="#"
                class="text-blueGray-500 hover:text-blueGray-800"
              >
                Team
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
