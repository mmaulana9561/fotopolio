import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiJava, SiReact, SiProgress, SiAntdesign } from "react-icons/si"; // Importing SiJava and SiReact
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Fitur" des="Apa yang Saya Lakukan" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Pengembang Web"
          des="Membangun situs web yang responsif dan interaktif untuk meningkatkan pengalaman pengguna."
          icon={<SiAntdesign />} // Icon for Web Developer
        />
        <Card
          title="Pengembangan Aplikasi"
          des="Menciptakan aplikasi yang inovatif untuk berbagai platform dengan fokus pada performa dan desain."
          icon={<AiFillAppstore />} // Icon for App Development
        />
        <Card
          title="Java"
          des="Mengembangkan aplikasi berbasis Java dengan arsitektur yang kuat dan efisien."
          icon={<SiJava />} // Icon for Java
        />
        <Card
          title="Pengembangan Mobile"
          des="Menciptakan aplikasi mobile yang intuitif dan mudah digunakan untuk platform iOS dan Android."
          icon={<FaMobile />} // Icon for Mobile Development
        />
        <Card
          title="React.js"
          des="Mengembangkan antarmuka pengguna yang dinamis dan cepat dengan React.js."
          icon={<SiReact />} // Icon for React.js
        />
        <Card
          title="Hosting Website"
          des="Menawarkan layanan hosting untuk memastikan situs web Anda selalu online dan cepat diakses."
          icon={<FaGlobe />} // Icon for Hosting
        />
      </div>
    </section>
  );
}

export default Features;
