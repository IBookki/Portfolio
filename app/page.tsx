import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me | Theo Jublou",
  description:
    "Learn more about Theo Jublou - A passionate developer studying at IIM Digital School with experience in Next.js, PHP, and TypeScript.",
};

export default function AboutMe() {
  return (
    <div className="self-center min-h-[calc(100vh-60px)] flex-col items-center justify-center p-10">
      <p className="pt-12 text-justify text-lg text-slate-200 opacity-90">
        My name is Theo Jublou, and I am currently studying at IIM Digital
        School, where I specialize in digital technologies and programming.
        During my studies, I have learned various programming languages and
        frameworks, including Next.js, PHP, and TypeScript.
      </p>

      <p className="pt-4 text-justify text-lg text-slate-200 opacity-90">
        My goal is to become a skilled full-stack developer or a digital project
        manager—roles in which I can combine technical expertise with project
        coordination. My passion for digital technologies was sparked in high
        school, particularly during my second year, when I had the opportunity
        to take Python coding classes.
      </p>

      <p className="pt-4 text-justify text-lg text-slate-200 opacity-90">
        This experience opened my eyes to the endless possibilities of
        technology and confirmed my desire to pursue a career in this dynamic
        and constantly evolving field.
      </p>

      <p className="pt-8 text-justify text-lg text-slate-200 opacity-90">
        In addition to my academic background, I have developed strong
        professional skills through various work experiences. Working at
        McDonald&apos;s taught me teamwork, adaptability, and the importance of
        organization in a fast-paced environment.
      </p>

      <p className="pt-4 text-justify text-lg text-slate-200 opacity-90">
        My role at the town hall helped me develop administrative skills and
        attention to detail, while my current position as a cashier at Carrefour has enhanced
        my customer service abilities, including resolving conflicts peacefully and
        professionally. These experiences have strengthened my communication
        skills and my ability to work effectively under pressure.
      </p>

      <p className="pt-8 text-justify text-lg text-slate-200 opacity-90">
        I am eager to join a dynamic and supportive team where I can grow both
        professionally and personally. I thrive in environments with clear
        opportunities for evolution and improvement, as they motivate me to give
        my best every day.
      </p>

      <p className="pt-8 text-justify text-lg text-slate-200 opacity-90">
        Outside of work, I love playing video games and I also stay active
        through gym workouts and calisthenics, and I enjoy meeting new people to
        broaden my perspectives. These hobbies keep me balanced and energized
        for new challenges.
      </p>
    </div>
  );
}
