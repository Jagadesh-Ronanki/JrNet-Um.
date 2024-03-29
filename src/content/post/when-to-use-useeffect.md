---
notionId: 72424fdc-7215-4228-8a00-2d7ce1c4d547
type: Post
authors:
  - JrNet
description: Transient Storage introduces another data location besides 
status:
  id: 584894eb-62ba-4358-8168-c33925aef4ac
  name: published
  color: green
date: 2023-03-03
title: When to use “useEffect”?
slug: when-to-use-useeffect

---

This post is written by notion ai


# When to Use 'useEffect' in React?


## Introduction


If you're a React developer, you're probably already familiar with the 'useEffect' hook. But do you know when to use it? In this post, we'll discuss three scenarios where 'useEffect' can be particularly useful.


## Reducing Side Effects


One of the main benefits of using 'useEffect' is that it can help reduce side effects in your code. Side effects are any changes that occur outside of the function, such as modifying the DOM or making API calls. By using 'useEffect', you can make sure that these side effects only occur when certain conditions are met. For example, you might use 'useEffect' to only fetch data from an API when a specific component mounts, rather than fetching data every time the component re-renders.


## Handling Dependencies


Another scenario where 'useEffect' can be useful is when you need to handle dependencies. When you pass an array of dependencies as the second argument of 'useEffect', React will only re-run the effect if one of the dependencies has changed. This can be particularly useful when you want to avoid unnecessary API calls or other expensive operations. By including only the necessary dependencies, you can ensure that your effect only runs when it needs to.


## Managing Component Lifecycles


Finally, 'useEffect' can be used to manage component lifecycles. For example, you might use 'useEffect' to set up event listeners or clean up resources when a component un-mounts. This can help prevent memory leaks and ensure that your component is properly cleaned up when it is no longer needed.


## Example Code


```javascript
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
```


## Conclusion


In summary, 'useEffect' is a powerful tool that can be used in a variety of scenarios. Whether you're trying to reduce side effects, handle dependencies, or manage component lifecycles, 'useEffect' can help you write more efficient and effective React code.

