import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "InvestIQ",
    description:
      "Built a full-stack stock trading platform with separate React apps for Landing/Auth and Dashboard, integrated with Node.js + Express backend and MongoDB Atlas.",
    image: "/projects/project5.png", // replace with your project image path
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Auth",
      "Bootstrap",
      "Material UI",
      "Vite",
    ],
    demoUrl: "https://investiq-ten.vercel.app/", // replace with actual deployed URL
    githubUrl: "https://github.com/ShyamsundarK18/zerodha-Clone-Project", // replace with your repo link
  },

  {
    id: 1,
    title: "WanderLust",
    description:
      "Developed a full-stack web application, a type of booking platform inspired by Airbnb",
    image: "/projects/project1.png",
    tags: [
      "Node.js",
      "JavaScript",
      "Bootstrap",
      "HTML",
      "Express.js",
      "MongoDB",
      "MVC architecture",
    ],
    demoUrl: "https://my-project-h9dl.onrender.com/listings?",
    githubUrl: "https://github.com/ShyamsundarK18/My-Project.git",
  },
  {
    id: 2,
    title: "WeatherNow",
    description:
      "Real-Time Weather Forecast App A sleek and responsive weather application built with React.It fetches real-time weather data using the OpenWeatherMap API. Displays temperature, humidity, weather for any location worldwide.",
    image: "/projects/project2.png",
    tags: ["React"],
    demoUrl:
      "https://react-weather-ppqczj24e-shyamsundar-kumars-projects.vercel.app/",
    githubUrl: "https://github.com/ShyamsundarK18/react-weather-app",
  },
  {
    id: 3,
    title: "TuneStream",
    description:
      "Developed a responsive, single-page music streaming UI Built interactive components including audio player, queue system, playlist manager,and track browser by using HTML and CSS",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS"],
    demoUrl: "https://transcendent-taffy-127fae.netlify.app/",
    githubUrl: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've built recently, each project below
          demonstrates my skills in front-end and Full-satck development and ,
          API handling
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ShyamsundarK18"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
