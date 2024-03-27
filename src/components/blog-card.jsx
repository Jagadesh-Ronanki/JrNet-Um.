import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import { HiArrowSmallRight } from "react-icons/hi2";

const BlogCard = () => {
  return (
    <Link href={"/blog/transient-storage"}>
      <article className="group flex-col text-[12px] leading-[19px] justify-between border-b-[0.1px] border-r-[0.1px] border-stone-900 flex max-md:p-[30px] items-start p-8 gap-4 hover:bg-neutral-500/10 transition-all delay-150 duration-200 ease-in-out">
        <h3 className="font-semibold text-xl [word-break:break-word] md:text-xl">
          Transient Storage: Revolutionizing Data Handling
        </h3>
        <span className="text-md opacity-70 font-light font-mono">
          <time dateTime="2024-02-27">Feb 27, 2024</time> • <address className="inline not-italic"></address> • 25 min read
        </span>
        <p className="text-[16px] leading-6 mb-6 max-md:text-[17px] max-md:leading-6 max-md:min-h-[7rem] min-h-[9rem] flex-1 font-light opacity-80">
          In this article, we will delve into Transient Storage (EIP-1153), the new, long-awaited feature at the EVM level that introduces another data location.
        </p>
        <Button variant="secondary" className="items-center flex justify-center max-md:w-full gap-4 px-5 py-3 bg-transparent border-stone-600 border-[0.1px] rounded-full font-normal group-hover:bg-black transition duration-300 ease-in-out">
          Read article
          <HiArrowSmallRight className="-translate-x-1 scale-125 group-hover:translate-x-0 transition-all duration-300 ease-in-out" />            
        </Button>
      </article>
    </Link>

  )
}

export default BlogCard