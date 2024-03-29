---
notionId: 57c44884-d97d-4ba4-967c-5f0bbd354ac1
type: Post
authors:
  - JrNet
description: Transient Storage introduces another data location besides 
status:
  id: 584894eb-62ba-4358-8168-c33925aef4ac
  name: published
  color: green
date: 2023-03-05
title: Getting Started with NestJS
slug: getting-started-with-nestjs

---

This post is written by notion ai


## Introduction


NestJS is a popular server-side framework for building Node.js web applications. It is built on top of Express, which is a minimal and flexible Node.js web application framework. NestJS provides a lot of features and abstractions that make it easy to build scalable and maintainable web applications. In this blog post, we will explore the basics of NestJS and how to get started with building web applications using this framework.


## Installation and Setup


Before we can start building web applications with NestJS, we need to install the NestJS CLI and create a new project. To install the NestJS CLI, we can use the following command:


```bash
npm install -g @nestjs/cli
```


Once the NestJS CLI is installed, we can create a new project using the following command:


```bash
nest new my-app
```


This will create a new NestJS project in a directory called `my-app`. We can then navigate to this directory and start the development server using the following command:


```bash
cd my-app
npm run start:dev
```


This will start the development server at `http://localhost:3000`. We can then open this URL in a web browser to see the default NestJS welcome page.


## Controllers and Routes


In NestJS, controllers are responsible for handling incoming HTTP requests and returning appropriate responses. We can create a new controller using the following command:


```bash
nest generate controller cats
```


This will create a new `cats.controller.ts` file in the `src` directory. We can then define a route handler method in this file as follows:


```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
```


This controller defines a `GET` route at the `/cats` URL that returns a string response. We can then navigate to `http://localhost:3000/cats` in a web browser to see the response.


## Services and Dependency Injection


In NestJS, services are used to encapsulate business logic and are usually injected into controllers using dependency injection. We can create a new service using the following command:


```bash
nest generate service cats
```


This will create a new `cats.service.ts` file in the `src` directory. We can then define a method in this file that returns a list of cats:


```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  findAll(): string[] {
    return ['Persian', 'Siamese', 'Bengal'];
  }
}
```


We can then inject this service into our controller as follows:


```typescript
import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  findAll(): string[] {
    return this.catsService.findAll();
  }
}
```


This controller now returns a list of cats that is provided by the `CatsService`. We can then navigate to `http://localhost:3000/cats` in a web browser to see the list of cats.


## Conclusion


NestJS is a powerful and flexible server-side framework that makes it easy to build scalable and maintainable web applications. In this blog post, we explored the basics of NestJS and how to get started with building web applications using this framework. We covered the installation and setup process, how to define controllers and routes, and how to use services and dependency injection. We hope that this blog post has given you a good introduction to NestJS and has inspired you to start building your own web applications using this framework.

