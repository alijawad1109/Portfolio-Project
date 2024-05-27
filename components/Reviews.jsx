'use client';

import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';


//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules';

const reviewsData = [
  {
    avatar:'/reviews/team1.jpg',
    name: 'Bilal Khurana',
    job: 'Full Stack Website',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus fuga illum tempora voluptates doloremque. Eum consectetur architecto maxime. Id reprehenderit blanditiis earum culpa eos impedit, iure dolorem nam quis!'
    
  },
  {
    avatar:'/reviews/team2.jpg',
    name: 'Bisma Khan',
    job: 'Front End Design',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus fuga illum tempora voluptates doloremque. Eum consectetur architecto maxime. Id reprehenderit blanditiis earum culpa eos impedit, iure dolorem nam quis!'
    
  },
  {
    avatar:'/reviews/team3.jpg',
    name: 'Faisal Naseer',
    job: 'Interior Designing',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus fuga illum tempora voluptates doloremque. Eum consectetur architecto maxime. Id reprehenderit blanditiis earum culpa eos impedit, iure dolorem nam quis!'
    
  },
  {
    avatar:'/reviews/team4.jpg',
    name: 'Kashmala Butt',
    job: 'IT Services',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus fuga illum tempora voluptates doloremque. Eum consectetur architecto maxime. Id reprehenderit blanditiis earum culpa eos impedit, iure dolorem nam quis!'
    
  },
  {
    avatar:'/reviews/avatar-4.png',
    name: 'Fatima Siddiqui',
    job: 'Engineer',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus fuga illum tempora voluptates doloremque. Eum consectetur architecto maxime. Id reprehenderit blanditiis earum culpa eos impedit, iure dolorem nam quis!'
  },
  {
    avatar:'/reviews/avatar-2.png',
    name: 'Aima Ihtasham',
    job: 'Backend Developer',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus fuga illum tempora voluptates doloremque. Eum consectetur architecto maxime. Id reprehenderit blanditiis earum culpa eos impedit, iure dolorem nam quis!'
  },
];

const Reviews = () => {
  return (
    <section className='mb-12 xl:mb-32'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
        {/* slider */}
        <Swiper 
        slidesPerView={1}
        breakpoints={{
          640:{slidesPerView:2},
          1400:{slidesPerView:3},
        }}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          clickable:true,
        }}
        className='h-[350px]'
        >
          {reviewsData.map((person, index)=>{
            return(
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                  <CardHeader className='p-0 mb-10'>
                    <div className='flex items-center gap-x-4'>
                      {/* image */}
                      <Image 
                        src={person.avatar}
                        width={70}
                        className='rounded-full'
                        height={70}
                        alt=''
                        priority
                      />
                      {/* name */}
                      <div className='flex flex-col'>
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className='text-lg text-muted-foreground'>
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Reviews