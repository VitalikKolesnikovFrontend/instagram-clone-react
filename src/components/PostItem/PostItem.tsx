import { useDispatch, useSelector } from "react-redux";
import PostCard from "../PostCard/PostCard";
import "./PostItem.css";
import { useEffect } from "react";
import { postThunk } from "../../redux/posts/postThunk";
import AppLoader from "../AppLoader/AppLoader";
import AppError from "../AppError/AppError";
import { AppDispatch, RootState } from "../../redux/store";

const PostItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);
  const status = useSelector((state: RootState) => state.posts.status);
  const error = useSelector((state: RootState) => state.posts.error);
  const hasError = error !== null && !undefined;

  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHXzyMEZe1cIb4mt_m6zt_p_8s9o1YnfX3g&s";

  useEffect(() => {
    dispatch(postThunk());
    console.log(posts);
  }, []);

  if (status) return <AppLoader />;

  return (
    <div className="post-item">
      {hasError && <AppError />}
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
