'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Header.module.css';
import { useRouter } from 'next/navigation';

export default function Header() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <Image
                className={styles.logo}
                src={'/metadorerna_transparent.png'}
                alt="Logo"
                width={255.8}
                height={250}
                priority
                onClick={() => router.push('/clicker')}
            />
        </div>
    );
}
