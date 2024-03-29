import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SlArrowRight } from "react-icons/sl";
import { HiArrowSmallRight } from "react-icons/hi2";

const BlogCard = ({ post }) => {
  const { title, date, description, slug, authors } = post;

  return (
    <Link href={slug}>
      <article className="group flex-col text-[12px] leading-[19px] min-h-[100%] justify-between border-b-[0.1px] border-r-[0.1px] border-stone-700 flex max-md:p-[30px] items-start p-8 gap-4 hover:bg-neutral-900/70 transition-all delay-150 duration-200 ease-in-out">
        <h3 className="font-semibold text-xl [word-break:break-word] md:text-xl">
          {title}
        </h3>
        <span className="text-md opacity-70 font-light font-mono">
          <time dateTime="2024-02-27">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time> • <address className="inline not-italic">{authors[0]}</address> • 25 min read
        </span>
        <p className="text-[16px] leading-6 mb-6 max-md:text-[17px] max-md:leading-6 max-md:min-h-[7rem] min-h-[9rem] flex-1 font-light opacity-80">
          {description}
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