import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Shyamsundar
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Kumar
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Full-stack web developer from Bhopal, currently pursuing a B.Tech in
            Computer Science & Engineering (CGPA: 9.08) at Rabindranath Tagore
            University. Skilled in JavaScript, React.js, Node.js, Express,
            MongoDB, SQL, HTML, and CSS, with expertise in building secure and
            scalable web applications. <br /> <br />
            Recently built InvestIQ, a full-stack stock trading platform
            featuring secure JWT authentication, automated fund allocation, and
            real-time portfolio updates (holdings, orders, funds, positions).
            Also developed Wanderlust, an Airbnb-style booking platform with
            Cloudinary image uploads and Mapbox-powered geolocation.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}
