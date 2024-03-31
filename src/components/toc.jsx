"use client"
import "@/../styles/tocbot.css";
import { useEffect } from "react";
import tocbot from "tocbot";

/* Source: https://webtech-note.com/posts/tocbot-contentlayer */
export default function Toc() {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".js-toc", // Select the wrapper of toc
      contentSelector: ".js-toc-content", // Select the warpper of contents
      headingSelector: "h1", // Choose the heading tags
      /* Optional 1.
      Enable these if you have a sticky header and adjust the offset value
      */
      // headingsOffset: 100,
      // scrollSmoothOffset: -100,

      /* Optional 2. 
      Enable this if 'active' class on scroll won't work properly
      */
      hasInnerContainers: true,
    });

    return () => tocbot.destroy();
  }, []);

  return (
    <div>
      <div className="js-toc"></div>
    </div>
  );
}