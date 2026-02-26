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
      <p className="mb-4">
        Halo, saya <span className="font-medium">Ahmad Mayiludin!</span> Saat ini saya adalah mahasiswa semester 6 di{" "}
        <span className="font-medium">Universitas Buana Perjuangan Karawang</span> dengan IPK{" "}
        <span className="font-medium">3.77</span>. Saya adalah seorang pengembang yang aktif dan
        berdedikasi, baik dalam akademik maupun pengembangan solusi teknologi di dunia nyata.
      </p>

      <p className="mb-2 font-medium">Fokus Utama:</p>
      <ul className="mb-4 text-left space-y-1">
        <li>
          🖥️ <span className="font-medium">Full Stack & Mobile:</span> Spesialis Laravel & Ionic Angular.
        </li>
        <li>
          🔐 <span className="font-medium">Cyber Security:</span> Kontributor proyek Open Source keamanan siber.
        </li>
        <li>
          🤖 <span className="font-medium">Future Tech:</span> Implementasi Computer Vision & UI/UX Design.
        </li>
      </ul>

      <p>
        Selain fokus pada teknis, saya memiliki pengalaman organisasi di kampus yang telah membentuk
        karakter kepemimpinan dan kerjasama tim saya. Saya selalu terbuka untuk tantangan baru dan
        kolaborasi inovatif di dunia digital.
      </p>
    </motion.section>
  );
}
