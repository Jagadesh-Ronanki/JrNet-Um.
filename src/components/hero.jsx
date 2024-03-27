import React from "react";

const Hero = () => {
  return (
    <div className="gap-[1/-1]">
      <div className="flex flex-col items-center justify-center md:h-[calc(100vh-200px)] max-w-full p-8 md:p-12 mx-auto w-[815px]">
        <h1 className="flex flex-col md:space-y-3 font-semibold text-center text-4xl md:text-6xl">
          <span className="">Jagadesh Ronanki</span>
          <span className="">
            <span className=" font-mono font-extralight text-[32px]">a.k.a</span> <span className="">JrNet</span>
          </span> 
        </h1>
        <p className="mt-6 text-center text-md md:text-lg font-light opacity-50">
          Our mission is to advance the adoption of blockchain technology and contribute towards the healthy development of the crypto/web3 space.
        </p>
        <div className="mt-8 flex md:mt-16 justify-center">
          <div className="border-l-[0.1px] border-b-stone-900 mr-8 pl-5 md:mr-10 md:pl-8">
            <h3 className="font-semibold text-2xl md:text-5xl">$1.1B</h3>
            <p className="font-light leading-tight opacity-50 md:mt-3 max-md:text-sm">
              in client assets protected
            </p>
          </div>
          <div className="border-l-[0.1px] border-b-stone-900 pl-5 md:pl-8">
            <h3 className="font-semibold text-2xl md:text-5xl">$5.3B</h3>
            <p className="font-light leading-tight opacity-50 md:mt-3 max-md:text-sm">
              in transacted value secured
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
