import style from "./style.module.css";
// import postPic from "../../assets/post-pic1.jpg";

interface HeaderPostProps {
  author: {
    name: string;
    position: string;
    profilePicture: string;
  };
}

export default function HeaderPost(props: HeaderPostProps) {
  return (
    <>
      <section className={style.headerPost}>
        <div className={style.postProfileData}>
          <div className={style.picture}>
            <img
              className={style.postImg}
              src={props.author.profilePicture}
              alt=""
            />
          </div>
          <div className={style.profilePostText}>
            <h3>{props.author.name}</h3>
            <span>{props.author.position}</span>
          </div>
        </div>
        <div className={style.publicationTime}>
          <p>Publicado há 1h</p>
        </div>
      </section>
    </>
  );
}
