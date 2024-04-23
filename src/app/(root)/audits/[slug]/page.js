import Toc from "@/components/toc";
import { absoluteUrl } from "../../../../lib/utils";

import "@/../styles/mdx.css";
import { Mdx } from "@/components/mdx-components";
import { allAudits } from "contentlayer/generated";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const audit = await getAuditFromParams(params)

  if (!audit) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set("heading", audit.title)
  ogUrl.searchParams.set("type", "Audit Report")
  ogUrl.searchParams.set("mode", "dark")

  return {
    title: audit.title,
    authors: audit.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: audit.title,
      description: `Uncovered ${audit.HMs} Highs and Meds`,
      type: "article",
      url: absoluteUrl(audit.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: audit.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: audit.title,
      images: [ogUrl.toString()],
    },
  }
}

async function getAuditFromParams(params) {
  const slug = params?.slug;
  const audit = allAudits.find((audit) => audit.slugAsParams === slug)

  if (!audit) {
    null
  }

  return audit
}

const page = async ({params}) => {
  const audit = await getAuditFromParams(params)
  
  if(!audit) {
    notFound()
  }

  const author = audit.authors[0]

  return (
    <article className="">
      <div className="border-b-[0.1px] border-stone-700 px-[32px] py-[64px] md:px-[48px] md:py-[160px]">
        <h1 className="font-semibold mb-4 text-2xl text-center [overflow-wrap:anywhere] md:text-4xl">
          {audit.title}
        </h1>
        <span className="block font-mono text-center font-light tracking-wide text-xs md:text-xs opacity-70 ">
          <time dateTime="2024-02-27">{new Date(audit.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time> • <address className="inline not-italic">{author}</address> • 25 min read
        </span>
      </div>
      <div className="group gap-4 md:text-lg xl:grid xl:grid-cols-[1fr_48rem_1fr]">
        <aside className="mt-2 pb-12 max-w-[210px] left-[3rem] sticky top-20 mb-24 h-fit max-h-screen overflow-y-hidden hover:overflow-y-auto max-xl:hidden text-white/45 hover:text-white/70 transition-color ease-in-out font-light text-md">
          <Toc />
        </aside>
        <div className="js-toc-content p-8 xl:p-12 xl:border-l-[0.1px] xl:border-r-[0.1px] border-stone-700 mx-auto max-w-[75ch] font-light text-left">
          <Mdx code={audit.body.code} />
        </div>
      </div>
    </article>
  );
};

export default page;