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
        <a href="heart-link-dating-app.vercel.app">
          <ProjectCard
            src="/HeartLink.png"
            title="HeartLink"
            description="HeartLink is an interactive dating app website designed to connect individuals based on shared interests and preferences. Built using Next.js and a graph database, it provides features like left-swipe/right-swipe functionality powered by react-card animations. Users can create profiles, explore matches, and interact seamlessly within an intuitive interface. HeartLink prioritizes meaningful connections, blending modern design with intelligent matchmaking."
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
