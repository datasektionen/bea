'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ScrollTop.module.css';

export function ScrollTop() {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            style={{ ...(!isVisible ? { display: 'none' } : {}) }}
            className={styles.container}
            onClick={scrollToTop}>
            <Image
                src="/arrow-up.svg"
                alt="Scroll to top"
                width={40}
                height={40}
                priority
            />
        </button>
    );
}
