import React from "react";
import Article from "./Article";

const ArticleList = (props) => {
  return (
    <main>
      {/* posts {props.posts.length} */}
      {props.posts.map((post) => {
        return (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
          />
        );
      })}
    </main>
  );
};

export default ArticleList;
