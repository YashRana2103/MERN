import React from "react";
import { createContext, useContext } from "react";

export const BlogsContext = createContext({
  lawyers: [
    // {
    //   b_id: 1,
    //   b_title: "Blog post about Real Estate",
    //   b_content:
    //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, tempore iure a repellendus laborum modi exercitationem deleniti, ex adipisci assumenda odio maxime mollitia voluptas qui accusamus fugiat, maiores accusantium? Ratione?",
    //   b__l_id: 1,
    //   b__i_id: 1,
    // },
  ],
  addBlog: (blog) => {},
});

export const useBlogs = () => {
  return useContext(BlogsContext);
};

export const BlogsProvider = BlogsContext.Provider;
