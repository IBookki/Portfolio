import css from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
    

export const Footer: React.FC = () => {
    return (
        <footer className={css.footer}>
            <div className={css.contacts}>
                <Link href="https://github.com/IBookki"><Image className={css.github} src="/logo/github-logo.png" alt="GitHub" width={60} height={60} priority/></Link>
                
                <Link href="https://www.linkedin.com/in/theo-jublou/"> <Image className={css.linkedin} src="/logo/linkedin.png" alt="GitHub" width={50} height={50} priority/> </Link>
            </div>        
        </footer>
    );
}