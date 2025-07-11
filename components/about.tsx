"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import BurstBload from "./burst-bload";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <div className="flex justify-center">
        <SectionHeading>👨‍💻 About Me</SectionHeading>
        <BurstBload />
      </div>
      <p className="mb-3">
    Hallo, Saya Ahmad Mayiludin! Saya adalah mahasiswa semester 4 di Universitas Buana Perjuangan Karawang dengan IPK 3.75. Di luar akademik, saya aktif menempa soft skill melalui berbagai organisasi kampus, mulai dari Himpunan Mahasiswa Teknik Informatika (HIMATIF) hingga Unit Kegiatan Mahasiswa.
  </p>

  {/* Paragraf kedua */}
  <p>
    Saya memiliki pengalaman dalam pengembangan web menggunakan <span className="font-medium">PHP dan Laravel</span>, serta pengembangan aplikasi mobile dengan <span className="font-medium">Ionic Angular.</span> Saya berkomitmen untuk terus belajar, berkembang, dan memberikan kontribusi nyata di dunia teknologi.
  </p>
    </motion.section>
  );
}
