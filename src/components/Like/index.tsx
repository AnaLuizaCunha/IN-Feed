import style from "./style.module.css";
import likeIcon from "../../assets/Like.png";
import likeIconActive from "../../assets/Like-active.png";
import { useState } from "react";

export default function Like() {
  const [like, setLike] = useState<number>(0);
  const [liked, setLiked] = useState<boolean>(false);

  function handleLikeClick() {
    setLiked((previous) => {
      if (previous) {
        setLike((n) => n - 1);
        return false;
      } else {
        setLike((n) => n + 1);
        return true;
      }
    });
  }
  return (
    <div
      className={`${style.like} ${liked ? style.active : ""}`}
      onClick={handleLikeClick}
    >
      <img src={liked ? likeIconActive : likeIcon} alt="Icone de like" />
      <span>Like • {like}</span>
    </div>
  );
}
