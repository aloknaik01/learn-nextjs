import Link from "next/link";
import style from "./about.module.css";

const AboutHeader = () => {
  return (
    <section className={style.about_header}>
      <div className={style.about_header_content}>
        <h1 className={style.about_heading}>About Me</h1>
        <Link href="/hero">Hero</Link>
        <p className={style.about_subtext}>
          Learn more about who I am, what I do, and what I love as a
          <span className={style.highlight}>Frontend Developer</span>.
        </p>
        
      </div>
    </section>
  );
};

export default AboutHeader;
