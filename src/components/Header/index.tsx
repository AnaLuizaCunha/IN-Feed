import logo from "../../assets/logo-in.svg";
import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <img src={logo} alt="Logo" />
      <h1>Feed</h1>
    </header>
  );
}
