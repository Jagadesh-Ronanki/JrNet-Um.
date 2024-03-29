import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Title from "./global/title";

const pastWorkData = [
  {
    ProtocolLogo: "/jr.svg",
    ProtocolName: "Maple Finance - Q4 2023",
    DownloadLink: "/pdf/maple_finance_q4_2023.pdf"
  },
  {
    ProtocolLogo: "/jr.svg",
    ProtocolName: "Example Protocol - Q2 2022",
    DownloadLink: "/pdf/example_protocol_q2_2022.pdf"
  },
  {
    ProtocolLogo: "/jr.svg",
    ProtocolName: "Protocol Three - Q3 2024",
    DownloadLink: "/pdf/protocol_three_q3_2024.pdf"
  },
];

const PastWork = () => {
  return (
    <div className="">
      <Title title={"Past Work"} className={'border-t-[0.1px] border-stone-700'}/>
      <div className="gap-[1/-1]">
        <section className="">
          <div className="p-6 md:p-12">
            {pastWorkData.map((work, index) => (
              <div key={index} className="rounded-xl flex justify-between items-center p-6 max-md:p-4 bg-darker-gray border border-dark-gray card mb-5 gap-4 bg-stone-950 border-stone-700 max-md:flex-col">
                <div className="flex items-center max-md:w-[95%] max-md:justify-between">
                  <Image
                    src={work.ProtocolLogo}
                    height={30}
                    width={30}
                    alt={"Logo"}
                    draggable="false"
                    className="object-contain object-left mr-10 inset-0 bg-transparent scale-[3]"
                  />
                  <span className="font-mono text-[16px]">{work.ProtocolName}</span>
                </div>
                <Button className="rounded-lg bg-stone-800 hover:bg-stone-700 max-md:w-full" variant="secondary">
                  <Link href={work.DownloadLink}>Download PDF</Link>
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PastWork;
