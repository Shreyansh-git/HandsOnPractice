import { useEffect, useState } from "react";
import "./index.css";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=15`
      );
      const allData = await response.json();
      if (data.length > 0) setData([...data, ...allData]);
      else setData(allData);
    };
    getData();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-container-IS">
      {data.map((post, index) => {
        return (
          <div key={index} className="container-IS">
            <div>{post.userId}</div>
            <div>{post.body}</div>
          </div>
        );
      })}
    </div>
  );
};
export default InfiniteScroll;
