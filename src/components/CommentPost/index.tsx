import commentPic from "../../assets/post-pic1.jpg";
import trashIcon from "../../assets/Trash.png";
import Like from "../Like";
import style from "./style.module.css";

interface CommentPostProps {
  id: number;
  content: string;
  onDelete: (id: number) => void;
}

export default function CommentPost({
  id,
  content,
  onDelete,
}: CommentPostProps) {
  return (
    <section className={style.section}>
      <div className={style.comment}>
        <div className={style.profilePicture}>
          <img src={commentPic} alt="Foto de perfil" />
        </div>
        <div className={style.commentSection}>
          <div className={style.commentHeader}>
            <div className={style.commentName}>
              <h4>Felyppe Nunes</h4>
              <p>Cerca de 2h</p>
            </div>
            <div className={style.deleteIcon}>
              <button type="button" onClick={() => onDelete(id)}>
                <img src={trashIcon} alt="Icone de lixeira" />
              </button>
            </div>
          </div>
          <p>{content}</p>
        </div>
      </div>
      <Like />
    </section>
  );
}
