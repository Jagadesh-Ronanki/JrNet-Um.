import BlogCard from "@/components/blog-card";
import Title from "@/components/global/title";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

export const metadata = {
  title: "Blog",
  description: "Web3 Auditor Notes",
  openGraph: {
    images: [
      {
        url: '/og-blog.png',
        width: 800,
        height: 600,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: '/og-blog.png',
    creator: "@JrNet_",
  },
}

const page = () => {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })  

  return (
    <div>
      <Title title={"Blog"} className={'sticky md:top-[79px] md:z-10 top-[78px] z-[2]'} />
      <section className="">
        {posts.length ? (
          <div className="grid">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
              {posts.map((post, index) => (
                <BlogCard post={post} key={index} />
              ))}
            </div>
          </div>
        ) : (
          <p className="h-[70vh] flex flex-col justify-center font-light tracking-widest md:text-xl text-center">No Posts published</p>
        )}
      </section>
    </div>
  );
};

export default page;
