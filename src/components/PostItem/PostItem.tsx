import PostCard from "../PostCard/PostCard";
import "./PostItem.css";

const PostItem = () => {
  const mockData = [
    {
      id: 1,
      avatarLetter: "R",
      title: "Shrimp and Chorizo Paella",
      date: "September 14, 2016",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHXzyMEZe1cIb4mt_m6zt_p_8s9o1YnfX3g&s",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    },
    {
      id: 2,
      avatarLetter: "U",
      title: "Shrimp and Chorizo Paella",
      date: "September 14, 2016",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHXzyMEZe1cIb4mt_m6zt_p_8s9o1YnfX3g&s",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    },
    {
      id: 3,
      avatarLetter: "V",
      title: "Shrimp and Chorizo Paella",
      date: "September 14, 2016",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHXzyMEZe1cIb4mt_m6zt_p_8s9o1YnfX3g&s",
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests.",
    },
  ];

  return (
    <div className="post-item">
      {mockData.map((post) => (
        <PostCard
          key={post.id}
          avatarLetter={post.avatarLetter}
          title={post.title}
          date={post.date}
          image={post.image}
          description={post.description}
        />
      ))}
    </div>
  );
};
export default PostItem;
