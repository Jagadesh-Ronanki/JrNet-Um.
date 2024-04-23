import PastWork from "@/components/past-work";
import { allAudits } from "contentlayer/generated";
import { compareDesc } from "date-fns";

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
      <section className="">
        {audits.length ? (
          <PastWork isPage={true}/>
        ) : (
          <p className="h-[70vh] flex flex-col justify-center font-light tracking-widest md:text-xl text-center">No Audits published</p>
        )}
      </section>
    </div>
  );
};

export default page;
