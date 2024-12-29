import React from 'react';
import styles from './Info.module.css';

interface InfoProps {
    title: string;
    children?: React.ReactNode;
}

export default function Info(props: InfoProps) {
    return (
        <>
            <h1 className={styles.pageTitle}>{props.title}</h1>
            {props.children && <div className={styles.infoBox}>{props.children}</div>}
        </>
    );
}
