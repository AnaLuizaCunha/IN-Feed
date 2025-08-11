import Header from "./components/Header";
import Post, { type PostType } from "./components/Post";
import ProfileCard from "./components/ProfileCard";
import style from "./style.module.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      profilePicture: "src/assets/post-pic1.jpg",
      name: "Thaís Gomes",
      position: "Designer",
    },
    content:
      "Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!",
  },
  {
    id: 2,
    author: {
      profilePicture: "src/assets/post-pic1.jpg",
      name: "Ricardo Siqueira",
      position: "Dev Back-end",
    },
    content:
      "Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!",
  },
];

export default function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <ProfileCard />
        <div className={style.posts}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </div>
    </>
  );
}
