"use client";
import Link from "next/link";
import { Button } from "./button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
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
    image: "/work/6.jpg",
    category: "react js",
    name: "Lumina Website",
    description:
      "Lorem ipsum dolor sit amet sonsectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "https://github.com/alijawad1109/Furnitore-Shop.git",
  },

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
    image: "/work/7.jpg",
    category: "next js",
    name: "Solstice Website",
    description:
      "Lorem ipsum dolor sit amet sonsectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "https://github.com/alijawad1109/Snapgram.git",
  },
];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div
          className="max-w-[400px] mx-auto xl:mx-0 text-center
                xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center
                xl:items-start"
        >
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Lorem, ipsum dolor sit amet consectetur adipisisicing elit.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
