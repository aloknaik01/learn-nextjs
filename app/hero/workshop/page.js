import "../../../app/globals.css";

export const metadata = {
  title: "WorkShop page",
  authors: [
    { name: "Alok Naik" },
    { name: "Alok Kumar Naik" },
    { name: "Dev_Alok" },
  ],
};
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React to showcase my frontend skills and projects.",
    link: "#",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather app that fetches live weather data using OpenWeatherMap API.",
    link: "#",
  },
  {
    title: "Todo List",
    description:
      "A clean and functional todo list app with local storage support.",
    link: "#",
  },
  {
    title: "Blog Platform",
    description: "A basic blogging platform built with React and Firebase.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
