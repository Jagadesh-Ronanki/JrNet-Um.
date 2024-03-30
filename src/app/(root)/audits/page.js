import BlogCard from "@/components/blog-card";
import Title from "@/components/global/title";
import { allAudits } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { formatDate } from "@/lib/utils"
import PastWork from "@/components/past-work";

export const metadata = {
  title: "Audits",
  description: "JrNet Findings Collection",
  openGraph: {
    images: [
      {
        url: '/og-audits.png',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: '/og-audits.png',
    creator: "@JrNet_",
  },
}

const page = () => {
  const audits = allAudits
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })  

  return (
    <div>
      {/* <Title title={"Audits"} className={'sticky md:top-[79px] md:z-10 top-[78px] z-[2]'} /> */}
      <section className="h-[70vh]">
        {audits.length ? (
          <PastWork />
        ) : (
          <p className="h-[70vh] flex flex-col justify-center font-light tracking-widest md:text-xl text-center">No Posts published</p>
        )}
      </section>
    </div>
  );
};

export default page;
