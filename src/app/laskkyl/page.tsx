'use client';

import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { getLaskkylData } from './server';
import { LaskkylData, LaskkylTypes, LaskkylTypetoGif, LaskkylTypetoString } from './types';
import { Gif } from './Gif';
import { useRouter } from 'next/navigation';

export default function Laskkyl() {
    const [laskkylData, setLaskkylData] = useState<LaskkylData | undefined>();
    const minstaKopRef = React.useRef<HTMLHeadingElement>(null);
    const router = useRouter();

    function toggleFullscreen() {
        if (document.fullscreenElement !== null) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }

    async function fetchLaskkylData() {
        try {
            const laskkylData = await getLaskkylData();
            setLaskkylData(laskkylData);
            console.log('Fetched Laskkyl data:', laskkylData);
        } catch (error) {
            console.error('Failed to fetch Laskkyl data:', error);
        }
    }

    useEffect(() => {
        // Fetch data and start polling every minute
        fetchLaskkylData();
        const dataInterval = setInterval(fetchLaskkylData, 1000 * 60);

        // Reload page every 10 minutes
        // const reloadInterval = setInterval(() => router.replace('/reload'), 1000 * 60 * 10);

        return () => {
            clearInterval(dataInterval);
            // clearInterval(reloadInterval);
        };
    }, [router]);

    useEffect(() => {
        if (minstaKopRef.current) {
            minstaKopRef.current.animate(
                [{ transform: 'scale(1)' }, { transform: 'scale(1.2)' }, { transform: 'scale(1)' }],
                {
                    duration: 1000,
                    iterations: Infinity,
                }
            );
        }
    }, [minstaKopRef]);

    return (
        <main className={styles.main}>
            <div className={styles.mainDiv}>
                <button
                    className={styles.fullscreenButton}
                    onClick={toggleFullscreen}>
                    <Image
                        src="/fullscreen-logo.svg"
                        alt="Fullscreen"
                        width={40}
                        height={40}
                        priority
                    />
                </button>
                <div className={styles.header}>
                    <Gif
                        src="/laskkyl.gif"
                        width={800}
                        height={400}
                    />
                </div>
                <div className={styles.productsDiv}>
                    {LaskkylTypes.map((type) =>
                        laskkylData?.products[type]?.length ? (
                            <div
                                key={type}
                                className={styles.typesDiv}>
                                {LaskkylTypetoGif[type] ? (
                                    <Gif
                                        src={LaskkylTypetoGif[type]}
                                        width={350}
                                        height={175}
                                    />
                                ) : (
                                    <h1>{LaskkylTypetoString[type]}</h1>
                                )}
                                {laskkylData?.products[type].map((product) => (
                                    <Product
                                        key={product.name}
                                        product={product}
                                    />
                                ))}
                            </div>
                        ) : null
                    )}
                </div>
                <div className={styles.minstaKopDiv}>
                    <h1
                        ref={minstaKopRef}
                        className={styles.minstaKop}>
                        !!!! MINSTA KÖP 10 KR !!!!
                    </h1>
                    <p style={{ fontSize: '1.5rem', textAlign: 'center' }}>
                        Annars dödar swishavgifterna oss :,(
                        <br />
                        ...och METAdorerna dig!
                        <br />
                        <br />
                        Om du har önskemål eller frågor kontakta oss på{' '}
                        <a href="mailto:laskkyl@metadorerna.se">laskkyl@metadorerna.se</a>
                    </p>
                </div>
            </div>
            <METAdorFooter />
        </main>
    );
}

function Product({ product }: { product: { name: string; price: number } }) {
    const { name, price } = product;

    return (
        <div className={styles.product}>
            <p>{name}</p>
            <div className={styles.dots}></div>
            <p>{price} kr</p>
        </div>
    );
}

function METAdorFooter() {
    return (
        <footer className={styles.footer}>
            <Image
                src="/metadorerna_transparent.png"
                alt="METAdorerna"
                width={100}
                height={100}
                priority
            />
            <Image
                src="/see_you_trans.png"
                alt="See you!"
                width={306}
                height={84}
                priority
            />
        </footer>
    );
}
