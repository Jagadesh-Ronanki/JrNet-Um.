import Title from "@/components/global/title";
import Image from "next/image";
import Link from "next/link";
import React from "react";


export const metadata = {
  title: "Contacts",
}

const page = () => {
  return (
    <section>
      <Title title={"Contacts"} />
      <div className="grid font-semibold leading-6 w-[100%] gap-[1px] xl:grid-cols-[1fr_70%] adaptive">
        <div className="relative p-12 border-b-[0.1px] xl:border-r-[0.1px] border-stone-700">
          <h2 className="font-display mb-5 text-xl md:text-3xl">
            I am based in Visakhapatnam, India.{" "}
            <span className="opacity-50">
              If you are ever in town, let me know!
            </span>
          </h2>
          <h2 className="text-xl md:text-3xl">
            <span className="opacity-50">Get in touch at </span>
            <Link href="mailto:elleven.community@gmail.com">
              <span className="underline cursor-pointer">jagadesh.ronanki@gmail.com</span>
            </Link>
            {/* <span className="opacity-50"> or via </span>
            <a
              href="https://tally.so/r/3lbpQp"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              this form
            </a> */}
            .
          </h2>
        </div>
        <div className="flex justify-center pb-10">
          <Image 
            src={'/images/india.svg'}
            height={100}
            width={800}
            alt="map"
            className="scale-100"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default page;
