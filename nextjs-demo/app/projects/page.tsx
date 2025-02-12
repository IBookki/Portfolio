import React from 'react';
import css from './projects.module.css';
import { div } from 'framer-motion/client';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Theo Jublou',
  description: 'Explore my portfolio of web development projects including CRUD applications, TypeScript implementations, and responsive web designs.',
};

export default function MyProjects() {
    return (
        <div className={css.container}>
            <Link href="https://github.com/IBookki/monito-website">
                    <div className={css.project}>
                        <Image 
                            className={css.image} 
                            src="/cover-sass.png" 
                            width={0} 
                            height={0} 
                            sizes="100vw" 
                            style={{ width: '20%', height: 'auto' }} 
                            priority 
                            alt="Sass project cover"
                        />
                        <div className={css.texte}>
                            <h1 className={css.h1}>Monito website</h1>
                            <p className={css.p}>Pixel-perfect copy of a site design using Sass technology</p>
                        </div>
                    </div>
            </Link>

            <Link href="https://github.com/IBookki/rendu-scrud"><div className={css.project}>
                <Image className={css.image} src="/cover-crud.png" width={0} height={0} sizes="100vw" style={{ width: '20%', height: 'auto' }} priority alt="Crud project cover"/>
                <div className={css.texte}>
                    <h1 className={css.h1}>CRUD movie sharing site</h1>
                    <p className={css.p}>Website allowing users to manage a collection of films, with specific functionalities for administrators to add, edit, and delete films.</p>
                </div>
            </div></Link>

            <Link href="https://github.com/IBookki/Todolist-Typecript"><div className={css.project}>
                <Image className={css.image} src="/cover-typecsript.png" width={0} height={0} sizes="100vw" style={{ width: '20%', height: 'auto' }} priority alt="Todolist typescript cover"/>
                <div className={css.texte}>
                    <h1 className={css.h1}>Typescript Todolist</h1>
                    <p className={css.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nam nisi culpa quibusdam, repudiandae quo placeat minus similique odio quae omnis totam voluptas? Ipsum deserunt vitae reprehenderit, alias nesciunt aspernatur!</p>
                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
            </div></Link>
        </div>

    );
}