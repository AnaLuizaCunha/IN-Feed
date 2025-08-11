import style from "./style.module.css";

interface CommentButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export default function CommentButton({
  onClick,
  disabled,
}: CommentButtonProps) {
  return (
    <>
      <button className={style.button} onClick={onClick} disabled={disabled}>
        Comentar
      </button>
    </>
  );
}
