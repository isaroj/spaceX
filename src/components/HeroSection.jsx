import { useState, useEffect, useCallback } from "react";
import { capsulesService } from "../service/CapsulesService";
import Pagination from "./Pagination";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const [capsules, setCapsules] = useState([]);
  const [currentCapsules, setCurrentCapsules] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [items, setItems] = useState([]);

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const getCapsules = async (query) => {
    if (query.length < 3) return
    try {
      setIsLoading(true);
      const { data } = await capsulesService(query);
      setCapsules(data);
      const paginationNums = [];
      Array(Object.keys(data).length)
        .fill(0)
        .map((num, index) => paginationNums.push(index + 1));
      setItems(paginationNums);
      setCurrentCapsules(data.slice(0, 4));
    } catch (error) {
      toast.error("Oops! something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const debounce = (func) => {
    let timer;
    return (...args) => {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        debugger
        func.apply(context, args);
      }, 500);
    };
  };

  const optimizedFn = useCallback(debounce(getCapsules), []);

  useEffect(() => {
    if (!query || query.length < 3) {
      setCapsules([])
      setCurrentCapsules([])
      return
    }
    optimizedFn(query);
  }, [query]);

  const loadCurrentCapsules = (index) => {
    let start = 0;
    let end = (index + 1) * 4;
    if (index >= 1) start = index * 4;
    const resCaps = capsules.slice(start, end);
    setCurrentCapsules(resCaps);
  };

  return (
    <div>
      <>
        <div class="bg-gray-900 px-10 py-20 w-full" id="heroSection">
          <div class="max-w-md mx-auto">
            <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                value={query}
                placeholder="Type something to search..."
                onChange={handleQuery}
              />
            </div>
          </div>
          {isLoading ? (
            <div className="">
              <h2 class="text-3xl md:text-4xl text-white leading-relaxed md:leading-snug mb-2 text-center m-20">
                Fetching capsule details...
              </h2>
              <div class="flex justify-center items-start">
                <div class="relative w-14 h-14 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
                  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gray-200 rounded-full border-2 border-white"></div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              {currentCapsules.length ? (
                <div>
                  <section style={{ minHeight: "25rem" }}>
                    <div class="flex flex-col justify-start h-full py-10">
                      <div class="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                          <h2 class="font-semibold text-gray-800">
                            Capsules Details
                          </h2>
                        </header>
                        <div class="p-3">
                          <div class="overflow-x-auto">
                            <table class="table-auto w-full">
                              <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                  <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">
                                      Serial No
                                    </div>
                                  </th>
                                  <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">
                                      Status
                                    </div>
                                  </th>
                                  <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-left">
                                      Type
                                    </div>
                                  </th>
                                  <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">
                                      Water Landings
                                    </div>
                                  </th>
                                  <th class="p-2 whitespace-nowrap">
                                    <div class="font-semibold text-center">
                                      Land Landings
                                    </div>
                                  </th>
                                </tr>
                              </thead>
                              <tbody class="text-sm divide-y divide-gray-100">
                                {currentCapsules.map((capsule, index) => {
                                  return (
                                    <tr key={index}>
                                      <td class="p-2 whitespace-nowrap">
                                        <div class="flex items-center">
                                          {capsule.serial}
                                        </div>
                                      </td>
                                      <td class="p-2 whitespace-nowrap">
                                        <div class="text-left">
                                          {capsule.status}
                                        </div>
                                      </td>
                                      <td class="p-2 whitespace-nowrap">
                                        <div class="text-left font-medium text-green-500">
                                          {capsule.type}
                                        </div>
                                      </td>
                                      <td class="p-2 whitespace-nowrap">
                                        <div class="text-lg text-center">
                                          {capsule.water_landings}
                                        </div>
                                      </td>
                                      <td class="p-2 whitespace-nowrap">
                                        <div class="text-lg text-center">
                                          {capsule.land_landings}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                                <tr>
                                  <td class="p-2 whitespace-nowrap">
                                    <div class="flex items-center">{}</div>
                                  </td>
                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-left">{}</div>
                                  </td>
                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-left font-medium text-green-500">
                                      {}
                                    </div>
                                  </td>
                                  <td class="p-2 whitespace-nowrap">
                                    <div class="text-lg text-center">{}</div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="my-10">
                    <Pagination
                      itemsPerPage={4}
                      loadCurrentCapsules={loadCurrentCapsules}
                      items={items}
                    />
                  </section>
                </div>
              ) : (
                <div className="flex flex-col justify-center items-center m-10">
                  <h2 class="text-3xl md:text-2xl text-white leading-relaxed md:leading-snug mb-2 py-10">
                    No Data To Display Or Input Is Not Given
                  </h2>
                </div>
              )}
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default HeroSection;
