import Link from 'next/link';
import css from './Header.module.css';

export const Header: React.FC = () => {
    return (
        <header className={css.header}>
            <nav className={css.nav}>
                <Link className={css.link} href="/">About Me</Link>
                <Link className={css.link} href="/projects">Projects</Link>
                <Link className={css.link} href="/experiences">Experiences</Link>
            </nav>
        </header>
    );
}
