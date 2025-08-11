import style from "./style.module.css";
import picture from "../../assets/profile-picture.jpeg";

export default function ProfileCard() {
  return (
    <section className={style.section}>
      <div className={style.profilePic}>
        <img src={picture} alt="" />
      </div>
      <div className={style.profileText}>
        <h2>Ana Luiza Cunha</h2>
        <h3>Dev Front-end</h3>
      </div>
    </section>
  );
}
