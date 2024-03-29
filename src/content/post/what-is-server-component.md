---
notionId: 3ec6277c-251c-4982-8196-f8ef8e551e3c
type: Post
authors:
  - JrNet
description: Transient Storage introduces another data location besides 
status:
  id: 584894eb-62ba-4358-8168-c33925aef4ac
  name: published
  color: green
date: 2023-03-02
title: What is Server Component?
slug: what-is-server-component

---

This post is written by notion ai


## Introduction


Next.js is a popular React-based framework that simplifies server-side rendering for web applications. With the release of Next.js 12, a new feature called Server Components has been introduced. In this blog post, we will discuss what Server Components are and how they can be used to improve the performance of Next.js applications.


## What are Server Components?


Server Components are a new type of component in Next.js that can be executed on the server-side. Traditional React components are executed on the client-side, which means that the browser must download the component code and execute it to render the component. This can result in slow rendering times, especially for larger applications. Server Components, on the other hand, are executed on the server-side and their output is sent directly to the client. This can significantly improve the performance of web applications, especially for complex components.


## How do Server Components work?


Server Components are executed in a Node.js environment, which means that they have access to the file system, network, and other server-side resources. When a user requests a page that contains Server Components, Next.js renders the components on the server and sends the output to the client. This means that the client does not need to execute any client-side JavaScript to render the components, which can result in faster rendering times and reduced time-to-interactivity.


## Example code


Here's an example of how to use Server Components in Next.js:


```javascript
// server-component.js
export default function MyServerComponent({ name }) {
  return <div>Hello, {name}!</div>
}

// index.js
import { serverComponent } from 'next/server'

const MyServerComponent = serverComponent('./server-component')

export default function Home() {
  return <MyServerComponent name="World" />
}

```


In this example, we create a Server Component called `MyServerComponent` that takes a `name` prop and returns a simple greeting. We then import this component in our `index.js` file using the `serverComponent` function provided by Next.js. When a user requests the home page, Next.js renders the `MyServerComponent` on the server and sends the output to the client, resulting in faster rendering times and improved user experience.


## Conclusion


Server Components are a powerful new feature in Next.js that can help developers improve the performance of their web applications. By executing complex components on the server-side, Next.js can reduce the amount of client-side JavaScript that needs to be downloaded and executed, resulting in faster rendering times and improved user experience. If you are building a Next.js application, be sure to explore the possibilities of Server Components and see how they can help you improve the performance of your application.

