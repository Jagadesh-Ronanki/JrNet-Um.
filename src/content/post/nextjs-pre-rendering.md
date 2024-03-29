---
notionId: fcab5155-e42b-4923-96a1-3639095d2085
type: Post
authors:
  - JrNet
description: Transient Storage introduces another data location besides 
status:
  id: 584894eb-62ba-4358-8168-c33925aef4ac
  name: published
  color: green
date: 2023-03-04
title: Next.js Pre-Rendering
slug: nextjs-pre-rendering

---

This post is written by notion ai


# Nextjs Pre-Rendering with Code Example


## Introduction


Nextjs is a popular React framework that provides many features to help developers build web applications. One of its most powerful features is pre-rendering. Pre-rendering allows you to generate static HTML files for your pages at build time, which can improve your website's performance and SEO. In this blog post, we will explore how to implement pre-rendering in Nextjs, including a code example to demonstrate the process.


## Pre-Rendering in Nextjs


By default, Nextjs uses server-side rendering (SSR) to generate HTML on the server and send it to the client. This approach works well for dynamic content, but it can be slow and inefficient for static content. Pre-rendering solves this problem by generating static HTML files at build time, which can be served to the client instantly.


To implement pre-rendering in Nextjs, you can use the `getStaticProps` function. This function is called at build time and returns data that is used to pre-render the page. Here is an example:


```javascript
export async function getStaticProps() {
  const res = await fetch('<https://api.example.com/data>');
  const data = await res.json();

  return {
    props: { data },
  };
}

```


In this example, we fetch data from an API and return it as props. Nextjs will use this data to pre-render the page at build time.


## Code Example


Let's take a look at a complete code example to see how pre-rendering works in Nextjs. In this example, we will create a simple blog using pre-rendering.


First, we need to create a blog post page. Here is the code for `pages/posts/[slug].js`:


```javascript
import { useRouter } from 'next/router';
import { getPostBySlug } from '../../lib/posts';

export default function Post({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostSlugs().map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = await getPostBySlug(params.slug);

  return { props: { post } };
}

```


In this code, we define a page for individual blog posts. We use `getStaticPaths` to generate a list of all possible blog post slugs, and `getStaticProps` to fetch the data for a specific blog post.


Next, we need to create a page to display all blog posts. Here is the code for `pages/posts/index.js`:


```javascript
import { getAllPosts } from '../../lib/posts';

export default function Posts({ posts }) {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/posts/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return { props: { posts } };
}

```


In this code, we define a page that displays all blog posts. We use `getStaticProps` to fetch the data for all blog posts.


## Conclusion


Pre-rendering is a powerful feature that can improve the performance and SEO of your Nextjs web applications. By using the `getStaticProps` function and generating static HTML files at build time, you can serve your content to the client instantly. In this blog post, we explored how to implement pre-rendering in Nextjs, including a code example to demonstrate the process. We hope this helps you improve your web applications and provide a better user experience.

