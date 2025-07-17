import "../globals.css";

export const metadata = {
  title: "About page",
  authors: [
    { name: "Alok Kumar Naik" },
    { name: "Alok Kumar" },
    { name: "Dev_Alok" },
  ],
};

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-intro">
          I'm <span className="highlight">dev_alok</span>, a creative and
          detail-oriented <span className="role">Frontend Developer</span> who
          loves crafting intuitive and aesthetic user experiences.
        </p>
        <p className="about-text">
          With a strong foundation in HTML, CSS, JavaScript, and React, I build
          responsive and engaging interfaces. I believe that frontend isn't just
          about making things look good—it's about making them feel right.
        </p>
        <p className="about-text">
          I enjoy turning ideas into reality through code, constantly learning
          new technologies, and collaborating with others to bring projects to
          life.
        </p>
      </div>
    </section>
  );
};

export default About;
