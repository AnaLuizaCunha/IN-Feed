import style from "./style.module.css";
import { type ChangeEvent } from "react";

interface PostTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostTextarea({ value, onChange }: PostTextareaProps) {
  return (
    <section className={style.section}>
      <label htmlFor="feedback">Deixe seu feedback</label>
      <textarea
        id="feedback"
        placeholder="Parabéns, lobinho! Continue assim!"
        value={value}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => {
          onChange(e.target.value);
        }}
      ></textarea>
    </section>
  );
}
