import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.container}>
            <Image
                className={styles.logo}
                src={'/metadorerna_transparent.png'}
                alt="Logo"
                width={255.8}
                height={250}
                priority
            />
        </div>
    );
}
