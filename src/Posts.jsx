import { useEffect, useState } from "react";
import Posted from "./Posted";
export default function Posts() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPost(data))
  }, []);
  return (
    <div>
      <h3>Post: </h3>
      <hr />
      {
        post.map(perPost => <Posted singlePost = {perPost}></Posted>)
      }
    </div>
  );
}
