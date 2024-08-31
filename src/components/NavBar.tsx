import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
    return (
        <nav className={styles.container}>
            <Link
                className={styles.link}
                href="/">
                Hem
            </Link>
            <Link
                className={styles.link}
                href="/about">
                Om METAdorerna
            </Link>
            <Link
                className={styles.link}
                href="/meta">
                META
            </Link>
            <Link
                className={styles.link}
                href="/stadrutiner">
                Städrutiner
            </Link>
            <Link
                className={styles.link}
                href="/schedule">
                Städschema
            </Link>
        </nav>
    );
}
