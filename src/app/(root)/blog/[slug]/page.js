import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next"
import { absoluteUrl, cn, formatDate } from "../../../../lib/utils";
import Toc from "@/components/toc";

import { allAuthors, allPosts } from "contentlayer/generated"
import { Mdx } from "@/components/mdx-components"
import "@/../styles/mdx.css"
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", post.title)
  ogUrl.searchParams.set("type", "Blog Post")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogUrl.toString()],
    },
  }
}

async function getPostFromParams(params) {
  const slug = params?.slug;
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

const page = async ({params}) => {
  const post = await getPostFromParams(params)
  
  if(!post) {
    notFound()
  }

  const author = post.authors[0]

  return (
    <article className="">
      <div className="border-b-[0.1px] border-stone-700 px-[32px] py-[64px] md:px-[48px] md:py-[160px]">
        <h1 className="font-semibold mb-4 text-2xl text-center [overflow-wrap:anywhere] md:text-4xl">
          {post.title}
        </h1>
        <span className="block font-mono text-center font-light tracking-wide text-xs md:text-xs opacity-70 ">
          <time dateTime="2024-02-27">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time> • <address className="inline not-italic">{author}</address> • 25 min read
        </span>
      </div>
      <div className="group gap-4 md:text-lg xl:grid xl:grid-cols-[1fr_48rem_1fr]">
        <aside className="mt-2 pb-12 max-w-[235px] left-[3rem] sticky top-20 mb-24 h-fit max-h-screen overflow-y-hidden hover:overflow-y-auto max-xl:hidden text-white/45 hover:text-white/70 transition-color ease-in-out font-light text-md">
          <Toc />
          {/* <nav>
            <ol className="space-y-2 font-sans">
              <Toc />
              <li className=" break-words ml-3 text-[0.9rem] leading-tight hover:font-normal hover:text-white transition-colors duration-300">
                <a href="#what-is-transient-storage-eip-1153-7784637fb90d">
                  What is Transient Storage (EIP-1153)?
                </a>
              </li>
              <li className="break-words ml-3 text-[0.9rem] leading-tight hover:text-white transition-colors duration-300">
                <a href="#why-do-we-need-eip-1153-8581a655ad89">
                  Why do we need EIP-1153?
                </a>
              </li>
              <li className="break-words ml-3 text-[0.9rem] leading-tight hover:text-white transition-colors duration-300">
                <a href="#use-cases-4855dffb44e1">Use Cases</a>
              </li>
              <li className="break-words ml-3 text-[0.9rem] leading-tight hover:text-white transition-colors duration-300">
                <a href="#key-security-considerations-benefits-and-drawbacks-of-eip-1153-5541830cca67">
                  Key Security Considerations, Benefits, and Drawbacks of
                  EIP-1153
                </a>
              </li>
              <li className="break-words ml-3 text-[0.9rem] leading-tight hover:text-white transition-colors duration-300">
                <a href="#latest-news-about-transient-storage-0335c6e5c2e6">
                  Latest News about Transient Storage
                </a>
              </li>
              <li className="break-words ml-3 text-[0.9rem] leading-tight hover:text-white transition-colors duration-100">
                <a href="#conclusion-and-outlook-b496d2f6a718">
                  Conclusion and Outlook
                </a>
              </li>
            </ol>
          </nav> */}
        </aside>
        <div className="js-toc-content p-8 xl:p-12 xl:border-l-[0.1px] xl:border-r-[0.1px] border-stone-700 mx-auto max-w-[75ch] font-light text-left">
          <Mdx code={post.body.code} />
        </div>
      </div>
    </article>
  );
};

export default page;