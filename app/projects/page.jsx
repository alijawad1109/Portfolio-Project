"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/5.jpg",
    category: "fullstack",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet sonsectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "https://github.com/alijawad1109/Aj-Movies.git",
  },
  {
    image: "/work/6.jpg",
    category: "react js",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet sonsectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "https://github.com/alijawad1109/Furnitore-Shop.git",
  },

  {
    image: "/work/9.jpg",
    category: "next js",
    name: "Serenity Website",
    description:
      "Lorem ipsum dolor sit amet sonsectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "https://github.com/alijawad1109/Next-js-Pizza-App.git",
  },

  {
    image: "/work/7.jpg",
    category: "next js",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet sonsectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "https://github.com/alijawad1109/Snapgram.git",
  },

  {
    image: "/work/8.jpg",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet sonsectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "https://github.com/alijawad1109/E-Shop.git",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Ignite Website",
    description:
      "Lorem ipsum dolor sit amet sonsectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Envision Website",
    description:
      "Lorem ipsum dolor sit amet sonsectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Zenith Website",
    description:
      "Lorem ipsum dolor sit amet sonsectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-2xl
          mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
