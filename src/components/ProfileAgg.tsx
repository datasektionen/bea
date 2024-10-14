'use client';
import React from 'react';
import styles from './Profile.module.css';
import Image from 'next/image';

export function Agg() {
    const [visible, setVisible] = React.useState(false);
    const [textVisible, setTextVisible] = React.useState(false);

    if (!visible) {
        return (
            <div
                className={styles.aggContainer}
                style={{ cursor: !visible ? 'pointer' : undefined }}
                onClick={() => setVisible(true)}>
                <Image
                    src="/pokemon-egg.png"
                    alt="pokemon egg"
                    width={150}
                    height={150}
                    priority
                />
            </div>
        );
    } else {
        return (
            <div className={styles.aggContainer}>
                <h2>Påskägg!</h2>
                <p>
                    Läs inte detta!
                    <br />
                    Jag varnar dig läs INTE!!
                    <br />
                    Okej som du vill!
                    <br />
                    Nu MÅSTE du genomföra en ägg-utmaning!
                    <br />
                </p>
                <ol>
                    <li>
                        <p>
                            För varje internfunkis-roll du inte kommer ihåg betydelsen av ta en shot bearnaisesås eller
                            vaniljsås 😋
                        </p>
                    </li>
                    <li>
                        <p>
                            Använd pilen nere till höger för att skrolla upp till toppen av sidan och påbörja utmaingen.
                            <br />
                            Lycka till!
                        </p>
                    </li>
                    <li>
                        <p>Klicka på rektangeln när du klarat utmaningen:</p>
                        <p
                            onClick={() => setTextVisible(true)}
                            style={{
                                backgroundColor: !textVisible ? 'var(--primary-text)' : undefined,
                                cursor: !textVisible ? 'pointer' : undefined,
                            }}>
                            Bra jobbat du är nu redo att bli METAdor!
                            <br />
                            <a
                                style={{ display: !textVisible ? 'none' : undefined }}
                                href={'https://www.dsekt.se/blimetad'}
                                target="_blank">
                                Bli METAd
                            </a>
                        </p>
                    </li>
                </ol>
            </div>
        );
    }
}
