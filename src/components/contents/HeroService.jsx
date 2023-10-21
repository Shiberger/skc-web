import React from "react";
import Image from "next/image";

function HeroService() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">
              Welcome to Skillsync
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <Image
                  src="/coding1.png"
                  width={150}
                  height={150}
                  alt="coding"
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                />
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >

                  <path d="M8 17l4 4 4-4m-4-5v9" />
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                </svg> */}
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  Program & Tech
                </h2>
                <p className="leading-relaxed">Downloads</p>
                <button className="btn btn-sm btn-outline btn-primary">
                  browse
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <Image
                  src="/paint.png"
                  width={150}
                  height={150}
                  alt="coding"
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                />
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  Design & Motion
                </h2>
                <p className="leading-relaxed">Users</p>
                <button className="btn btn-sm btn-outline btn-primary">
                  browse
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <Image
                  src="/chart.png"
                  width={150}
                  height={150}
                  alt="coding"
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                />
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  Margeting & Ads
                </h2>
                <p className="leading-relaxed">Files</p>
                <button className="btn btn-sm btn-outline btn-primary">
                browse
                </button>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <Image
                  src="/camera.png"
                  width={150}
                  height={150}
                  alt="coding"
                  className="text-blue-500 w-12 h-12 mb-3 inline-block"
                />
                <h2 className="title-font font-medium text-2xl text-gray-900">
                  Photo & Video
                </h2>
                <p className="leading-relaxed">CA</p>
                <button className="btn btn-sm btn-outline btn-primary">
                    browse
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroService;
