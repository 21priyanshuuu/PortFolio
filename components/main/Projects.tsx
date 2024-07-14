import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <a href="https://task-manager-cyan-sigma.vercel.app/">
          <ProjectCard
            src="/Music.png"
            title="Next.js Music Acaedemy"
            description=" Elevate your musical journey with our immersive platform powered by Next.js, offering seamless learning experiences and advanced curriculum tailored for aspiring musicians."
          />
        </a>
        <a href="https://task-manager-cyan-sigma.vercel.app/">
          <ProjectCard
            src="/iTask.png"
            title="TaskMinder"
            description="Prioritize your tasks based on urgency and importance with our intuitive grid system. Stay organized, focused, and productive by categorizing tasks into urgent, important, and routine sections. "
          />
        </a>

        <ProjectCard
          src="/SpaceWebsite.png"
          title="Fullstack Developer Portfolio"
          description="Explore my portfolio showcasing my skills and projects in website, mobile, and software development. Get to know my expertise in React, JavaScript, and other technologies."
        />
      </div>
    </div>
  );
};

export default Projects;
