'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiWhatsappFill,
  RiFacebookFill,
  RiInstagramFill,
  RiStackOverflowFill
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://api.whatsapp.com/send/?phone=+923164944176&text=Hello%2C+I+saw+your+portfolio+and+would+like+to+discuss+potential+projects.&type=phone_number&app_absent=0',
    name: <RiWhatsappFill />
  },
  
  {
    path: 'https://www.linkedin.com/in/ali-jawad-192246287/',
    name: <RiLinkedinFill />
  },
  {
    path: 'https://github.com/alijawad1109',
    name: <RiGithubFill />
  },
  
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index} target='_blank'>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        )
      })}
    </div>
  )
}

export default Socials