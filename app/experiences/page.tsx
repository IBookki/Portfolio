import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience & Skills | Theo Jublou",
  description:
    "Professional experience and technical skills in web development, project management, and digital technologies.",
};

const ExperiencesPage = () => {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-extrabold mb-6">My Experiences</h1>
      <div className="grid gap-6">

        <div className="p-6 border rounded shadow-md">
          <h2 className="text-slate-100 text-xl font-bold">Stage</h2>
          <p className="text-gray-600">Krys Vincennes • June - July 2025</p>
          <p className="text-slate-100 mt-2 font-medium">
            Two-month internship to design a website for the Krys store
          </p>
          <p className="text-slate-300 mt-2">
            Structured with NextJS, Front made using Tailwind and Javascript
          </p>
          <p className="text-slate-300 mt-2">
            The store can add new eyewear models itself.
          </p>
        </div>

        <div className="p-6 border rounded shadow-md">
          <h2 className="text-slate-100 text-xl font-bold">Expert code</h2>
          <p className="text-gray-600">
            IIM Project Grant • February - March 2025
          </p>
          <p className="text-slate-100 mt-2 font-medium">
             Customer : Ville du Plessis-Robinson-Year 2 final validation project: Design of a forum and a showcase site
              for the Maison des Partages de la Ville du Plessis-Robinson.
          </p>
          <p className="text-slate-300 mt-2">
            Technologies used: NextJS (React/HTML/CSS), Tailwind, Typescript (Javascript)
          </p>
          <p className="text-slate-300 mt-2">
            Database: noSQL with MongoDB
          </p>
          <p className="text-slate-300 mt-2">
            Post system in CRUD, replies, like, popularity and post search
          </p>
        </div>

        <div className="p-6 border rounded shadow-md">
          <h2 className="text-slate-100 text-xl font-bold">Project Manager</h2>
          <p className="text-gray-600">
            IIM Project Grant • September - December 2024
          </p>
          <p className="text-slate-100 mt-2 font-medium">
            Mission: Management of a multidisciplinary team of 10 students
            (Design, Marketing, Coding) to make the Musée du Jouet more dynamic
            and interactive.
          </p>
          <p className="text-slate-300 mt-2">
            Complete creation of a family-friendly website for customizing
            classic cars
          </p>
          <p className="text-slate-300 mt-2">
            Defining objectives, planning, monitoring deadlines, and
            coordinating with the city
          </p>
          <p className="text-slate-300 mt-2">
            Implementation of communication strategies to make the museum more
            attractive
          </p>
        </div>

                <div className="p-6 border rounded shadow-md">
          <h2 className="text-slate-100 text-xl font-bold">Cashier</h2>
          <p className="text-gray-600">
            Carrefour • August 2024 -{" "}
            <span className="text-amber-400">Present</span>
          </p>
          <p className="text-slate-100 mt-2 font-medium">
            Take charge of the customer, collect the products, guide the
            customer through the different methods of payment.
          </p>
          <p className="text-slate-300 mt-2">
            Skills acquired: Customer service, Teamwork, Thoroughness
          </p>
        </div>

        <div className="p-6 border rounded shadow-md">
          <h2 className="text-slate-100 text-xl font-bold">Team Member</h2>
          <p className="text-gray-600">McDonald&apos;s • April - June 2024</p>
          <p className="text-slate-100 mt-2 font-medium">
            Preparation of products in the kitchen in compliance with hygiene
            and safety rules
          </p>
          <p className="text-slate-300 mt-2">
            Skills acquired: Speed, Pressure resistance, Teamwork
          </p>
        </div>
      </div>

      <h2 className="text-3xl font-extrabold mb-6 mt-12">Skills</h2>
      <div className="flex flex-wrap gap-5">
        <div className="bg-green-800 text-white border-green-300 border flex items-center justify-center p-4 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.33%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
          <p className="text-sm md:text-base">Typescript</p>
        </div>
        <div className="bg-green-800 text-white border-green-300 border flex items-center justify-center p-4 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.33%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
          <p className="text-sm md:text-base">CSS</p>
        </div>
        <div className="bg-blue-800 text-white border-blue-300 border flex items-center justify-center p-4 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.33%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
          <p className="text-sm md:text-base">Agile</p>
        </div>
        <div className="bg-green-800 text-white border-green-300 border flex items-center justify-center p-4 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.33%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
          <p className="text-sm md:text-base">HTML</p>
        </div>
        <div className="bg-blue-800 text-white border-blue-300 border flex items-center justify-center p-4 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.33%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
          <p className="text-sm md:text-base">Design Thinking</p>
        </div>
        <div className="bg-green-800 text-white border-green-300 border flex items-center justify-center p-4 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.33%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
          <p className="text-sm md:text-base">Python</p>
        </div>
        <div className="bg-blue-800 text-white border-blue-300 border flex items-center justify-center p-4 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.33%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
          <p className="text-sm md:text-base">UI/UX</p>
        </div>
        <div className="bg-green-800 text-white border-green-300 border flex items-center justify-center p-4 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.33%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
          <p className="text-sm md:text-base">Tailwind</p>
        </div>
        <div className="bg-green-800 text-white border-green-300 border flex items-center justify-center p-4 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.33%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
          <p className="text-sm md:text-base">PHP</p>
        </div>
        <div className="bg-blue-800 text-white border-green-300 border flex items-center justify-center p-4 w-full sm:w-[calc(50%-1.25rem)] md:w-[calc(33.33%-1.25rem)] lg:w-[calc(20%-1.25rem)]">
          <p className="text-sm md:text-base">SEO</p>
        </div>
      </div>
    </main>
  );
};

export default ExperiencesPage;
