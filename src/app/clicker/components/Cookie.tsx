'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Cookie.module.css';
import { clicksInRowToSpeed, cookieSpeedMap, getCookieLevel, getExtraCookies } from './utils';
import { CookieClass } from '../helpers';

interface ExtraCookie {
    x: number;
    y: number;
    speed: number;
}

export function Cookie() {
    const [cookieSpeed, setCookieSpeed] = useState(1);
    const [clicks, setClicks] = useState(0);
    const [clicksInRow, setClicksInRow] = useState(0);
    const [extraCookies, setExtraCookies] = useState<ExtraCookie[]>([]);
    const clicksInRowTimeout = useRef<NodeJS.Timeout | null>(null);
    const CookieInstance = useRef<CookieClass | null>(null);
    const cookieRef = useRef<HTMLImageElement | null>(null);

    async function initClicks() {
        if (!CookieInstance.current) {
            return;
        }
        setClicks(await CookieInstance.current.decryptClicksFromLS());
    }

    const updateClicksInRow = useCallback(() => {
        if (clicksInRowTimeout.current) {
            clearTimeout(clicksInRowTimeout.current);
        }

        setClicksInRow((cur) => ++cur);
        if (clicksInRowToSpeed[clicksInRow]) {
            setCookieSpeed(clicksInRowToSpeed[clicksInRow]);
        }

        clicksInRowTimeout.current = setTimeout(() => {
            setClicksInRow(0);
            setCookieSpeed(1);
            setExtraCookies([]);
        }, 1000);

        if (extraCookies.length < getExtraCookies(clicksInRow)) {
            setExtraCookies((prev) => [
                ...prev,
                {
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    speed: Math.floor(Math.random() * 9) + 1,
                },
            ]);
        }
    }, [clicksInRow, extraCookies]);

    const click = useCallback(async () => {
        if (!CookieInstance.current) {
            return;
        }
        CookieInstance.current.click();
        setClicks(CookieInstance.current.getClicks());
        updateClicksInRow();
    }, [updateClicksInRow]);

    useEffect(() => {
        if (!CookieInstance.current) {
            CookieInstance.current = new CookieClass();
        }
        initClicks();
    }, []);

    useEffect(() => {
        function handleSpacebar(event: KeyboardEvent) {
            if (event.key === ' ') {
                click();
            }
        }

        window.addEventListener('keyup', handleSpacebar);

        return () => {
            window.removeEventListener('keyup', handleSpacebar);
        };
    }, [click]);

    return (
        <div style={{ overflow: 'hidden' }}>
            <style>
                {`
                    ${Object.entries(cookieSpeedMap)
                        .map(([speed, time]) => {
                            return `#cookie-${speed} {
                            animation: rotation infinite ${time}s linear;
                        }`;
                        })
                        .join('\n')}

                    @keyframes rotation {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                `}
            </style>
            <Image
                id={`cookie-${getCookieLevel(cookieSpeed)}`}
                ref={cookieRef}
                className={styles.cookie}
                src={'/metadorerna_transparent.png'}
                alt="Logo"
                width={255.8}
                height={250}
                priority
                onClick={click}
            />
            <div className={styles.clicksContainer}>
                <h2>Clicks: {clicks}</h2>
                <h2>Streak: {clicksInRow}</h2>
            </div>
            <div className={styles.manyCookieDiv}>
                {/* Place 10 random cookies */}
                {extraCookies.map(({ x, y, speed }, i) => (
                    <Image
                        key={i}
                        id={`cookie-${getCookieLevel(speed)}`}
                        className={styles.manyCookie}
                        style={{
                            top: `max(calc(${y}vh - ${cookieRef.current?.height || 0}px), 0px)`, // `${Math.random() * 90}vh`,
                            left: `max(calc(${x}vw - ${cookieRef.current?.height || 0}px), 0px)`, //`${Math.random() * 90}vw`,
                        }}
                        src={'/metadorerna_transparent.png'}
                        alt="Logo"
                        width={255.8}
                        height={250}
                        priority
                    />
                ))}
            </div>
        </div>
    );
}
