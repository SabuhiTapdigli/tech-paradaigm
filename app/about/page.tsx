import Image from "next/image";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <section className="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800 ">
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <Image
                src="https://i.postimg.cc/j5L5bX2d/pexels-andrea-piacquadio-3757946.jpg"
                alt=""
                className="relative z-40 object-cover w-full h-96 rounded-3xl"
                height="400"
                width="400"
              />
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <h2 className="mb-4 text-4xl font-semibold text-blue-500 dark:text-gray-300">
                About Us
              </h2>
              <p className="mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniamLorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
