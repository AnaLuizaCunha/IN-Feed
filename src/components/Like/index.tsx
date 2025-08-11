import style from "./style.module.css";
import likeIcon from "../../assets/Like.png";
import likeIconActive from "../../assets/Like-active.png";

interface LikeProps {
  likes: number;
  isLiked: boolean;
  onClick: () => void;
}

export default function Like({ likes, isLiked, onClick }: LikeProps) {
  return (
    <div
      className={`${style.like} ${isLiked ? style.active : ""}`}
      onClick={onClick}
    >
      <img src={isLiked ? likeIconActive : likeIcon} alt="Icone de like" />
      <span>Like • {likes}</span>
    </div>
  );
}
