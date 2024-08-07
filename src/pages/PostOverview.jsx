import { useState, useEffect } from "react";
import { Card, Empty } from "antd";

const PostOverview = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const result = await fetch("http://localhost:8080/posts");
      const json = await result.json();
      console.log(json);
      setPosts(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="post_background">
      {!posts ? (
        <Empty />
      ) : (
        <div className="post_container">
          {posts.map((post) => {
            return (
              <Card key={post.uuid}>
                <p>{post.name}</p>
                <p>{post.postText}</p>
                <p>{post.mastodonDate}</p>
                <img src={post.icon} alt="" />
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PostOverview;
