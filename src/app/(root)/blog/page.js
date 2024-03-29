import BlogCard from "@/components/blog-card";
import Title from "@/components/global/title";
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Blog"
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
          <p>No Posts published</p>
        )}
        {/* <div className="grid">
          <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))]">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default page;
