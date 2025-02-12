import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience & Skills | Theo Jublou',
  description: 'Professional experience and technical skills in web development, project management, and digital technologies.',
};

const ExperiencesPage = () => {
    return (
        <main className="min-h-screen p-8">
            <h1 className="text-3xl font-extrabold mb-6">My Experiences</h1>
            <div className="grid gap-6">
                <div className="p-6 border rounded shadow-md">
                        <h2 className="text-slate-100 text-xl font-bold">Cashier</h2>
                        <p className="text-gray-600">Carrefour  •  August 2024 - <span className="text-amber-400">Present</span></p> 
                        <p className="text-slate-100 mt-2 font-medium">Take charge of the customer, collect the products, guide the customer through the different methods of collection.</p>
                        <p className="text-slate-300 mt-2">Skills acquired: Customer service, Teamwork, Thoroughness
                        </p>
                    </div>

                

                <div className="p-6 border rounded shadow-md">
                    <h2 className="text-slate-100 text-xl font-bold">Project Manager</h2>
                    <p className="text-gray-600">IIM Project Grant  •  September - December 2024</p>
                    <p className="text-slate-100 mt-2 font-medium">Mission : Management of a multidisciplinary team of 10 students (Design,Marketing, Coding) to make the Musée du Jouet more dynamic and interactive -Mission : Management of a multidisciplinary team of 10 students (Design,Marketing, Coding) to make the Musée du Jouet more dynamic and interactive.</p>
                    <p className="text-slate-300 mt-2">-Complete creation of a family-friendly website for customizing classic cars</p>
                    <p className="text-slate-300 mt-2">-Defining objectives, planning, monitoring deadlines, and coordinating with the city</p>
                    <p className="text-slate-300 mt-2">-Implementation of communication strategies to make the museum more attractive</p>
                </div>

                <div className="p-6 border rounded shadow-md">
                    <h2 className="text-slate-100 text-xl font-bold">Team Member</h2>
                    <p className="text-gray-600">McDonald's  •  April - June 2024</p>
                    <p className="text-slate-100 mt-2 font-medium">Preparation of products in the kitchen in compliance with hygiene and safety rules
                    </p>
                    <p className="text-slate-300 mt-2">-Compétences acquises : Rapidité, Résistance à la pression, Travail d'équipe</p>
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
