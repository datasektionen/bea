'use client';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './Cookie.module.css';
import { clicksInRowToSpeed, getCookieSpeed } from './utils';
import { CookieClass } from '../helpers';

export function Cookie() {
    const [cookieSpeed, setCookieSpeed] = useState(1);
    const [clicks, setClicks] = useState(0);
    const [clicksInRow, setClicksInRow] = useState(0);
    const clicksInRowTimeout = useRef<NodeJS.Timeout | null>(null);
    const CookieInstance = useRef<CookieClass | null>(null);

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
        }, 1000);
    }, [clicksInRow]);

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
        <div>
            <style>
                {`
                    #cookie {
                        animation: rotation infinite ${getCookieSpeed(cookieSpeed)}s linear;
                    }

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
                id="cookie"
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
        </div>
    );
}
