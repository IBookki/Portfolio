import Image from 'next/image';
import Link from 'next/link';
import css from './Side.module.css';

export const Side: React.FC = () => {
    return (
        <div className={css.side}>
            <nav className={css.nav}>
                <h1 className={css.h1}>Theo</h1>
                <h2 className={css.h2}>Jublou</h2>
            </nav>

            <div className={css.contacts}>
            <Link href="https://github.com/IBookki"><Image className={css.github} src="/logo/github-logo.png" alt="GitHub" width={60} height={60} priority/></Link>
                
            <Link href="https://www.linkedin.com/in/theo-jublou/"> <Image className={css.linkedin} src="/logo/linkedin.png" alt="GitHub" width={50} height={50} priority/> </Link>
            </div>
        </div>
    );
}