import Post from "./Post";

const posts = [
  {
    id: "123",
    username: "CleverSap",
    userImg:
      "https://firebasestorage.googleapis.com/v0/b/twitter-clone-9e749.appspot.com/o/CleverSap%20Profile.jpg?alt=media&token=8fc59170-1d7d-495e-bf81-b537f1dfcffd",
    img: "https://wallpaperaccess.com/full/3496656.jpg",
    caption: "Lovely nature 🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲",
  },
  {
    id: "123",
    username: "CleverSap",
    userImg:
      "https://firebasestorage.googleapis.com/v0/b/twitter-clone-9e749.appspot.com/o/CleverSap%20Profile.jpg?alt=media&token=8fc59170-1d7d-495e-bf81-b537f1dfcffd",
    img: "https://wallpaperaccess.com/full/3496656.jpg",
    caption: "Lovely nature 🌲🌲🌲🌲🌲🌲🌲🌲🌲🌲",
  },
];

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
};

export default Posts;
