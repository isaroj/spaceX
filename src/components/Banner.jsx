import bannerImgOne from '../assets/banners/bannerImgOne.png'
import bannerImgTwo from '../assets/banners/bannerImgTwo.png'
import bannerImgThree from '../assets/banners/bannerImgThree.png'


const Banner = () => {
  return (
    <section className="w-full">
      <div class="bg-black text-white py-20">
        <div class="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
          <div class="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 class="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              SpaceX
            </h1>
            <h2 class="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Leading the innovation
            </h2>
            <p class="text-sm md:text-base text-gray-50 mb-4">
              Innovative, being a risk-taker, inclusivity, and diversity.
            </p>
            <a
              href="#heroSection"
              class="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div class="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
            <div class="h-48 flex flex-wrap content-center">
              <div>
                <img
                  class="inline-block mt-28 hidden xl:block"
                  src={bannerImgOne}
                />
              </div>
              <div>
                <img
                  class="inline-block mt-24 md:mt-0 p-8 md:p-0"
                  src={bannerImgTwo}
                />
              </div>
              <div>
                <img
                  class="inline-block mt-28 hidden lg:block"
                  src={bannerImgThree}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner