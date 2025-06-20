import React from "react";
import css from "./projects.module.css";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Theo Jublou",
  description:
    "Explore my portfolio of web development projects including CRUD applications, TypeScript implementations, and responsive web designs.",
};

export default function MyProjects() {
  return (
    <div className={css.container}>
      
      <Link
        href="https://github.com/IBookki/Plessis-BAP-forum"
        className={css.project}
      >
        <Image
          className={css.image}
          src="/cover-forum.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "20%", height: "auto" }}
          priority
          alt="Sass project cover"
        />
        <div className={css.texte}>
          <h1 className={css.h1}>Forum Maison des part&apos;ages</h1>
          <p className={css.p}>
            A modern, specialized discussion forum for parents, offering a space
            for exchange and support on parenting-related topics. Project
            completed in 2 weeks, as requested by the Maison des Part&apos;ages
            in Plessis Robinson.
          </p>
        </div>
      </Link>

      <Link
        href="https://github.com/IBookki/rendu-scrud"
        className={css.project}
      >
        <Image
          className={css.image}
          src="/cover-crud.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "20%", height: "auto" }}
          priority
          alt="CRUD project cover"
        />
        <div className={css.texte}>
          <h1 className={css.h1}>CRUD movie sharing site</h1>
          <p className={css.p}>
            Website allowing users to manage a collection of films, with
            specific functionalities for administrators to add, edit, and delete
            films.
          </p>
        </div>
      </Link>

      <Link
        href="https://github.com/IBookki/monito-website"
        className={css.project}
      >
        <Image
          className={css.image}
          src="/cover-sass.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "20%", height: "auto" }}
          priority
          alt="Sass project cover"
        />
        <div className={css.texte}>
          <h1 className={css.h1}>Monito website</h1>
          <p className={css.p}>
            Pixel-perfect copy of a site design using Sass technology
          </p>
        </div>
      </Link>

      <Link
        href="https://github.com/IBookki/Todolist-Typecript"
        className={css.project}
      >
        <Image
          className={css.image}
          src="/cover-typecsript.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "20%", height: "auto" }}
          priority
          alt="TypeScript TodoList cover"
        />
        <div className={css.texte}>
          <h1 className={css.h1}>TypeScript TodoList</h1>
          <p className={css.p}>
            A task management application built with TypeScript, featuring CRUD
            operations and local storage persistence.
          </p>
        </div>
      </Link>
    </div>
  );
}
