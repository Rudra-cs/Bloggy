import React from "react";

const Post = () => {
  return (
    <div className="post">
      <div className="image">
        <img src="/vite.svg" alt="" />
      </div>
      <div className="texts">
        <h2>Vite react project</h2>
        <div className="info">
          <a className="author">Rudra Behera</a>
          <time>2023-01-06 16:45</time>
        </div>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab saepe
          obcaecati veniam consectetur dolore hic pariatur consequuntur
          perspiciatis vitae natus nihil exercitationem molestiae quis, deserunt
          eum a dolorum unde in!
        </p>
      </div>
    </div>
  );
};

export default Post;
