import BlogCard from "@/components/blog-card";
import Title from "@/components/global/title";


const page = () => {
  return (
    <div>
      <Title title={"Blog"} className={'sticky md:top-[79px] md:z-10 top-[78px] z-[2]'} />
      <section className="">
        <div className="grid">
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
        </div>
      </section>
    </div>
  );
};

export default page;
