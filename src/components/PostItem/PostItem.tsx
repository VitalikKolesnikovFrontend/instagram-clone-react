import { useDispatch, useSelector } from "react-redux";
import PostCard from "../PostCard/PostCard";
import "./PostItem.css";
import { useEffect } from "react";
import { postThunk } from "../../redux/postThunk";

const PostItem = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHXzyMEZe1cIb4mt_m6zt_p_8s9o1YnfX3g&s";

  useEffect(() => {
    dispatch(postThunk());
    console.log(posts);
  }, []);

  return (
    <div className="post-item">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          avatarLetter={post.user.username[0]}
          title={post.user.username}
          date={post.createdAt}
          image={image}
          description={post.content}
        />
      ))}
    </div>
  );
};
export default PostItem;
