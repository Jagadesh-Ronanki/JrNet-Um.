"use client"
import Stats from "./stats";

const Hero = () => {
  const { highsAndMeds, cumulativeEarnings } = Stats();
  
  function padZerosToHundredDigits(number) {
    // Convert the number to a string
    let numberString = String(highsAndMeds);
  
    // Calculate the number of zeros to pad
    let zerosToPad = 3 - numberString.length;
  
    // Pad zeros to the left of the number
    let paddedNumber = '0'.repeat(zerosToPad);
  
    return paddedNumber;
  }

  return (
    <div className="gap-[1/-1]">
      <div className="flex flex-col items-center justify-center md:h-[calc(100vh-200px)] max-w-full p-8 md:p-12 mx-auto w-[815px]">
        <h1 className="flex flex-col md:space-y-3 font-semibold text-center text-2xl md:text-5xl">
          JrNet <span className="md:-translate-y-[10px] animate-pulse max-md:scale-150 -scale-75 text-white opacity-70">∞︎︎</span> Smart Contract Auditor
        </h1>
        <p className="mt-6 text-center text-md md:text-lg font-light opacity-75">
          I'm an independent security researcher specializing in Solidity smart contracts. My mission is to secure the Web3 frontier through comprehensive smart contract audits.
        </p>
        <div className="mt-8 flex md:mt-16 justify-center">
          <div className="border-l-[0.1px] border-b-stone-700 mr-8 pl-5 md:mr-10 md:pl-8">
            <h3 className="font-semibold text-2xl md:text-5xl">
              <span className="opacity-30">
                {padZerosToHundredDigits(highsAndMeds)}
              </span>
              {highsAndMeds}
            </h3>
            <p className="font-light leading-tight opacity-75 md:mt-3 max-md:text-sm">
              Highs and Meds
            </p>
          </div>
          <div className="border-l-[0.1px] border-b-stone-700 pl-5 md:pl-8">
            <h3 className="font-semibold text-2xl md:text-5xl">${cumulativeEarnings}</h3>
            <p className="font-light leading-tight opacity-75 md:mt-3 max-md:text-sm">
              Cummulative earnings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
