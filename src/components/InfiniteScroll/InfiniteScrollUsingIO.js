import { useEffect, useRef, useState } from "react";
import "./InfiniteScrollUsingIO.css";

const InfiniteScrollUsingIO = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const referenceValue = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (referenceValue.current) {
      observer.observe(referenceValue.current);
    }

    return () => {
      if (referenceValue.current) observer.unobserve(referenceValue.current);
    };
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=15`
      );
      const postsData = await response.json();
      setPosts([...posts, ...postsData]);
    };
    getPosts();
  }, [page]);

  return (
    <div className="main-container-ISUIO">
      {posts.map((post) => {
        return (
          <div className="container-ISUIO">
            <span>{post.userId}</span>
            <div>{post.body}</div>
          </div>
        );
      })}
      <div className="loader-ISUIO" ref={referenceValue}>
        Loading...
      </div>
    </div>
  );
};
export default InfiniteScrollUsingIO;
