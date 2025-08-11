import CommentButton from "../CommentButton";
import HeaderPost from "../HeaderPost";
import PostTextarea from "../PostTextarea";
import style from "./style.module.css";
import CommentPost from "../CommentPost";
import { useState } from "react";

export interface PostType {
  id: number;
  author: {
    profilePicture: string;
    name: string;
    position: string;
  };
  content: string;
}

interface PostProps {
  post: PostType;
}

interface PostComment {
  id: number;
  content: string;
}
export default function Post({ post }: PostProps) {
  const [draftComment, setDraftComment] = useState<string>("");
  const [comments, setComments] = useState<PostComment[]>([]);
  const [nextId, setNextId] = useState<number>(1);

  const handleSubmitComment = () => {
    const trimmed = draftComment.trim();
    setComments((previous) => [...previous, { id: nextId, content: trimmed }]);
    setNextId((n) => n + 1);
    setDraftComment("");
  };

  const handleDeleteComment = (id: number) => {
    setComments((previous) =>
      previous.filter((parameter) => parameter.id !== id)
    );
  };

  return (
    <section className={style.section}>
      <HeaderPost author={post.author} />
      <p>
        Lorem ipsum dolor sit amet. Ex laboriosam dolorem non tempore earum et
        voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni
        amet ut ipsam molestiae aut facilis minus et quia reiciendis sed
        excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia
        et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius
        fugiat est temporibus similique rem illum natus sit unde eveniet. Non
        quos omnis ut autem labore nam vero consequatur est porro similique ad
        adipisci quisquam!
      </p>
      <div className={style.addComment}>
        <PostTextarea value={draftComment} onChange={setDraftComment} />
        <CommentButton
          onClick={handleSubmitComment}
          disabled={!draftComment.trim()}
        />
      </div>

      {comments.map(({ id, content }) => (
        <CommentPost
          key={id}
          id={id}
          content={content}
          onDelete={handleDeleteComment}
        />
      ))}
    </section>
  );
}
