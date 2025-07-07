import { Briefcase, Code, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              With a solid foundation in JavaScript, HTML, CSS, Node.js,
              Express, SQL, and MongoDB, I thrive on creating responsive,
              secure, and user-friendly web applications. Currently pursuing a
              B.Tech in Computer Science & Engineering (CGPA 9.13) at
              Rabindranath Tagore University in Bhopal, I've designed full-stack
              solutions powered by Node.js, Express, and MongoDB—backed by
              robust authentication, media handling, and mapping features.
            </p>

            <p className="text-muted-foreground">
              I'm deeply committed to elegant problem-solving, exemplified
              through projects like Wanderlust (an Airbnb-style platform with
              Cloudinary and Mapbox integration) and TuneStream (a custom music
              UI). My work earned me 1st place in my university's Code-a-thon
              and runner-up in a sensor-enabled smart dustbin competition. I
              constantly learn and iterate, ready to take on new challenges in
              the evolving web landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1TDxPksxB9wMhfvkMNlH5Wi4lAiEIIl4j/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full-Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building scalable web applications using React.js, Node.js,
                    Express, and MongoDB. From frontend UI to backend APIs, I
                    create robust, end-to-end solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    API Integration & Problem Solving
                  </h4>
                  <p className="text-muted-foreground">
                    Experienced in integrating RESTful APIs like Mapbox and
                    Cloudinary. Skilled at solving complex logic problems and
                    implementing secure authentication.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Technical Education & Growth
                  </h4>
                  <p className="text-muted-foreground">
                    Pursuing B.Tech in Computer Science with a strong academic
                    track (CGPA: 9.13). Continuously learning new technologies
                    and building real-world projects like Wanderlust and
                    TuneStream.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
