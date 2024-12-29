import React from 'react';
import styles from './page.module.css';
import { Cookie } from './components/Cookie';

export default function Clicker() {
    return (
        <main className={styles.main}>
            <Cookie />
        </main>
    );
}
