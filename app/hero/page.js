import "../globals.css";
import ghibli from "../../public/ghibli.jpeg";
import Image from "next/image";

export const metadata = {
  // this is meta tag for SEO purpose
  title: "Hero Page", // title showm in above tittle bar in your browser
  description: "This is my Hero Page",
  authos: [
    { name: "Alok Kumar Naik" },
    { name: "Dev_Alok" },
    { name: "Alok Naik" },
    { name: "Alok Kumar" },
    { name: "Developer_Alok" },
  ],
  keywords: ["Alok", "Alok Kumar", "Alok kumar Naik", "Dev Alok", "Dev_ALok"],
};

const HeroSection = () => {
  return (
    <section className="hero font-roboto">
      <div className="hero-content">
        <h1>
          Hey, I'm <span className="highlight">dev_alok</span>
        </h1>
        <p>
          A passionate <span className="role">Frontend Developer</span> crafting
          beautiful, responsive, and interactive web interfaces. I love turning
          ideas into smooth user experiences.
        </p>
        <a href="#projects" className="cta-button poppins">
          View My Work →
        </a>
      </div>
      <div className="photo-section">
        <div className="photo-wrapper">
          <Image
            src={ghibli}
            alt="dev_alok"
            className="profile-photo"
            height={400}
            width={400}
            priority={false}
            blurDataURL="./ghibli.jpeg"
            loading="lazy"
          />
          <h3 className="photo-caption">dev_alok — Frontend Developer</h3>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
