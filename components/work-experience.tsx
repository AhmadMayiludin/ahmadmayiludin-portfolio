"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { workExperienceData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function WorkExperience() {
    const { ref } = useSectionInView("Experience");
    const { theme } = useTheme();

    return (
        <section
            ref={ref}
            id="work-experience"
            className="mb-16 scroll-mt-28 w-full max-w-[53rem]"
        >
            <SectionHeading>💼 Work Experience</SectionHeading>

            <div className="flex flex-col gap-6">
                {workExperienceData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`rounded-2xl border p-6 shadow-sm ${theme === "light"
                            ? "bg-gray-100 border-gray-200"
                            : "bg-white/5 border-white/10"
                            }`}
                    >
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-4">
                            <div
                                className={`text-2xl p-3 rounded-xl ${theme === "light" ? "bg-white shadow" : "bg-white/10"
                                    }`}
                            >
                                {item.icon}
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold text-lg">{item.title}</h3>
                                <p className="font-semibold text-blue-600 dark:text-blue-400">
                                    {item.company}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-white/60">
                                    {item.division} · {item.date}
                                </p>
                            </div>
                        </div>

                        {/* Images */}
                        <div className="grid grid-cols-2 gap-3 mb-5">
                            {item.imageUrls.map((img, i) => (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                    key={i}
                                    src={img}
                                    alt={`${item.title} photo ${i + 1}`}
                                    className="rounded-xl object-contain w-full aspect-[3/4] shadow-md bg-gray-100 dark:bg-white/5"
                                />
                            ))}
                        </div>

                        {/* Description bullets */}
                        <ul className="space-y-2 mb-5 text-sm text-gray-700 dark:text-white/75">
                            {item.description.map((point, i) => (
                                <li key={i} className="flex gap-2">
                                    <span className="mt-1 text-blue-500 shrink-0">▹</span>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Tech badges */}
                        <div className="flex flex-wrap gap-2">
                            {item.tech.map((t, i) => (
                                <span
                                    key={i}
                                    className={`text-xs font-medium px-3 py-1 rounded-full ${theme === "light"
                                        ? "bg-blue-100 text-blue-700"
                                        : "bg-blue-500/20 text-blue-300"
                                        }`}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
