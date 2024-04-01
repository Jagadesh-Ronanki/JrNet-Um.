import { allAudits } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Title from "./global/title";
import { Button } from "./ui/button";

const PastWork = () => {
  const audits = allAudits
    .filter((audit) => audit.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className="">
      <Title title={"Past Work"} className={'border-t-[0.1px] border-stone-700'}/>
      <div className="gap-[1/-1]">
        <section className="">
          <div className="p-6 md:p-12">
            {audits.map((audit, index) => (
              <div key={index} className="rounded-xl flex justify-between items-center p-6 max-md:p-4 bg-darker-gray border border-dark-gray card mb-5 gap-4 bg-neutral-900/80 border-stone-700 max-md:flex-col">
                <div className="flex items-center max-md:w-[95%] max-md:justify-between">
                  <Image
                    src={audit.logo}
                    height={30}
                    width={30}
                    alt={"Logo"}
                    draggable="false"
                    className="object-contain object-left mr-10 inset-0 bg-transparent scale-[1.2]"
                  />
                  <span className="font-mono text-[16px]">{audit.title}</span>
                </div>
                <Link href={audit.slug} className="max-md:w-full max-md:mt-2">
                  <Button  className="rounded-full border-[0.4px] text-white border-stone-700 bg-black hover:bg-neutral-900/40 max-md:w-full max-md:mt-2 font-extralight tracking-wider" variant="secondary">
                    Read Report
                    <ArrowUpRight className="pl-2 opacity-90" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default PastWork;
