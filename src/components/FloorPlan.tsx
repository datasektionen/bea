'use client';

import { useEffect, useRef, useState } from 'react';
import { ClickPopup, ClickPopupRef } from './ClickPopup';
import styles from './FloorPlan.module.css';
import { useRouter } from 'next/navigation';
import PulsatingCircle from './PulsatingCircle';
import { copyToClipboard } from '@/app/utils/clipboard';

const WALL_WIDTH = 5;

export default function FloorPlan() {
    const container = useRef<SVGSVGElement>(null);
    const meetingRoom = useRef<ClickPopupRef>(null);
    const d1 = useRef<ClickPopupRef>(null);
    const me1 = useRef<ClickPopupRef>(null);
    const cleaningRoom = useRef<ClickPopupRef>(null);
    const fuses = useRef<ClickPopupRef>(null);
    const ghost = useRef<ClickPopupRef>(null);
    const router = useRouter();
    const [highlight, setHighlight] = useState<string | null>(null);
    const [highlightEl, setHighlightEl] = useState<Element | null>(null);

    function copyHighlightLink(hash: string) {
        setHighlight(hash);
        router.push("#" + hash, { scroll: false });
        const url = new URL("#" + hash, location.href);
        copyToClipboard(url.href);
    }

    useEffect(() => {
        function readHash() {
            setHighlight(location.hash.substring(1) || null);
        }
        readHash();
        window.addEventListener("locationchange", readHash);
        window.addEventListener("hashchange", readHash);
        return () => {
            window.removeEventListener("locationchange", readHash);
            window.removeEventListener("hashchange", readHash);
        };
    }, []);

    useEffect(() => {
        if (!container.current) return;
        if (!highlight) {
            setHighlightEl(null);
            return;
        }
        const attributeValue = decodeURIComponent(highlight).replace(/[åä]/g, 'a').replace(/ö/g, 'o');
        const el = container.current?.querySelector(`[data-highlight=${attributeValue}]`);
        setHighlightEl(el);
        el?.scrollIntoView({ block: "center", behavior: 'smooth' });
    }, [container, highlight]);

    return (
        <svg ref={container} width="100%" height="100%" viewBox="0 0 1000 1000">
            {/* White background everywhere inside META. */}
            <path fill="white" d="M 375 645 H 344 L 226 484 V 288 H 190 V 255 H 226 V 215 H 278 V 188 H 552.5 H 312 V 215 H 420 V 188 H 455 V 215 H 550 V 32 H 790 V 165 H 720 V 145 H 652.5 V 188 H 580 V 215 H 594 V 225 H 720 V 600 L 725 605 H 742 L 747 600 V 302 H 938 V 656 H 900 V 680 H 862 H 762 V 653 H 748 V 642 H 714 V 675 H 586 V 642 H 411 V 645 Z" />

            {/* Highlight using a pulsating red circle to show where something is on the map. */}
            {highlightEl && <PulsatingCircle anchor={highlightEl} />}

            {/* Walls, rooms and other lines. */}
            <g fill="none" stroke="black" strokeWidth={WALL_WIDTH}>
                {/* Outer walls. */}
                <path d="M 375 645 H 344 L 226 484 V 288 H 190" />
                <path d="M 190 255 H 226 V 215 H 278 V 188" />
                <path d="M 314 188 V 215 H 419 V 188" />
                <path d="M 455 188 V 215 H 550 V 188" />
                <path d="M 580 188 V 215 H 594 V 225 H 720 V 250" />
                <path d="M 720 280 V 600 L 725 605 H 742 L 747 600 V 302 H 938 V 656 H 900 V 680 H 862" />
                <path d="M 798 680 H 762" />
                <path d="M 762 705 V 653 H 748 V 642 H 714 V 705 Z" />
                <path d="M 714 675 H 586" />
                <path d="M 543 705 V 642 H 586 V 705 Z" />
                <path d="M 543 642 H 410" />

                {/* The bar */}
                <path d="M 375 645 V 555 L 318 475 V 382 H 350 V 470 L 408 546 V 645 Z" />

                {/* Catwalk */}
                <path d="M 225 312 H 275 V 255 H 280 M 314 255 H 594 V 227" />
                <path d="M 282 312 h 35 V 255 H 282 Z m 0 -11 h 35 m -35 -11 h 35 m -35 -11 h 35 m -35 -12 h 35" />

                {/* Hall-ramp-vägg-grejen */}
                <path d="M 750 645 H 794 V 602" />
                <path d="M 794 602 H 810 V 475 H 794 Z" />

                {/* Media spritis */}
                <g fill="white">
                    <path d="M 190 285.5 V 368 H 150 L 38 197 H 190 V 257.5" />
                    <text x="140" y="270" textAnchor="middle" strokeWidth="1" fill="black" fontSize="23px">Me2</text>
                </g>
                {/* Door */}
                <path d="M 227 264 v -1 a -20 20 0 0 1 20 20" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 225 284 h 23" stroke="black" strokeWidth="3" />
                <path d="M 226 256 v 8" />

                {/* Mötesrummet */}
                <g data-highlight="motesrummet" fill="white" className={styles.room} onClick={e => meetingRoom.current?.toggle(e)}>
                    <path d="M 282.5 188 H 225 V 32 H 390 V 188 H 309.5" />
                    <text x="307" y="118" textAnchor="middle" strokeWidth="1" fill="black" fontSize="23px">Mötesrummet</text>
                </g>
                {/* Door */}
                <path d="M 307 181 a -20 -20 0 0 0 -20 20" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 307 180 v 23" stroke="black" strokeWidth="3" />
                <path d="M 305.5 203 h 6" />
                <path d="M 280 203 h 8" />
                <ClickPopup ref={meetingRoom}>
                    <div style={{ maxWidth: '300px' }} lang='sv'>
                        <h3 className={styles.popupTitle}>Mötesrummet</h3>
                        <p className={styles.popupText}>Ett mindre rum som kan bokas av sektions&shy;medlemar, främst för sektions&shy;verksamhet.</p>
                        <a href="https://bokning.datasektionen.se/bookings/8">
                            <button className={styles.popupButton}>Boka mötesrummet</button>
                        </a>
                        <br />
                        <button className={styles.copyLinkButton} onClick={() => copyHighlightLink("motesrummet")}>Kopiera länk</button>
                    </div>
                </ClickPopup>

                {/* Media förråd */}
                <g data-highlight="mediaforrad" fill="white" className={styles.room} onClick={e => me1.current?.toggle(e)}>
                    <path d="M 421.5 188 H 405 V 32 H 540 V 188 H 452.5" />
                    <text x="472" y="118" textAnchor="middle" strokeWidth="1" fill="black" fontSize="23px">Me1</text>
                </g>
                {/* Door */}
                <path d="M 427 181 a 20 20 0 0 1 20 20" stroke="gray" strokeDasharray="4" strokeWidth="2" />
                <path d="M 427 180 v 23" stroke="black" strokeWidth="3" />
                <path d="M 420 203 h 8.5" />
                <path d="M 445 203 h 8" />
                <ClickPopup ref={me1}>
                    <div style={{ maxWidth: '300px' }} lang='sv'>
                        <h3 className={styles.popupTitle}>Medias förråd</h3>
                        <p className={styles.popupText}>Förvaringsutrymme för Sektionen för Medieteknik.</p>
                        <button className={styles.copyLinkButton} onClick={() => copyHighlightLink("mediaforrad")}>Kopiera länk</button>
                    </div>
                </ClickPopup>

                {/* Data förråd */}
                <g data-highlight="dataforrad" fill="white" className={styles.room} onClick={e => d1.current?.toggle(e)}>
                    {/* Invisible door paths to fill correctly. */}
                    <path d="M 650 108 V 128 L 650 188 H 552.5 Z" stroke="none" />
                    <path d="M 552.5 188 H 548 V 32 H 650 V 108" />
                    <path d="M 650 128 V 188 H 577.5" />
                    <text x="598" y="118" textAnchor="middle" strokeWidth="1" fill="black" fontSize="23px">D1</text>
                </g>
                <ClickPopup ref={d1}>
                    <div style={{ maxWidth: '300px' }} lang='sv'>
                        <h3 className={styles.popupTitle}>Datas förråd</h3>
                        <p className={styles.popupText}>Förvaringsutrymme för Datas&shy;ektionens nämder och projekt.</p>
                        <button className={styles.copyLinkButton} onClick={() => copyHighlightLink("dataforrad")}>Kopiera länk</button>
                    </div>
                </ClickPopup>

                {/* Door */}
                <path d="M 555 181 a 20 20 0 0 1 20 20" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 555 180 v 23" stroke="black" strokeWidth="3" />
                <path d="M 552 203 h 4.5" />
                <path d="M 574 203 h 6" />

                {/* Data spritis */}
                <g fill="white">
                    <path d="M 652.5 32 H 790 V 165 H 720 V 145 H 652.5" />
                    <text x="725" y="102" textAnchor="middle" strokeWidth="1" fill="black" fontSize="23px">D2</text>
                </g>
                {/* Door */}
                <path d="M 629.5 127 a 20 20 0 0 1 20 -20" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 628.5 127 h 24" stroke="black" strokeWidth="3" />

                {/* Spökförrådet */}
                <g data-highlight="spokforradet" fill="white" className={styles.room} onClick={e => ghost.current?.toggle(e)}>
                    <path d="M 717.5 250 H 850 V 280 H 717.5" />
                    <text x="760" y="272" textAnchor="middle" strokeWidth="1" fill="black" fontSize="22px">👻</text>
                </g>
                {/* Door */}
                <path d="M 698 254 a 20 20 0 0 0 20 20" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 697 254 h 24" stroke="black" strokeWidth="3" />
                <path d="M 720 273 v 6" />
                <ClickPopup ref={ghost}>
                    <div style={{ maxWidth: '300px' }} lang='sv'>
                        <h3 className={styles.popupTitle}>Spökförrådet</h3>
                        <p className={styles.popupText}>Lääääskigt 👻</p>
                        <button className={styles.copyLinkButton} onClick={() => copyHighlightLink("spokforradet")}>Kopiera länk</button>
                    </div>
                </ClickPopup>

                {/* Too-wah-lett */}
                <g fill="white">
                    <path d="M 800 313 V 302 H 747 V 350 H 800 V 330.5" />
                    <text x="775" y="335" textAnchor="middle" strokeWidth="1" fill="black" fontSize="18px">WC</text>
                </g>
                {/* Door */}
                <path d="M 822 311.5 a 20 20 0 0 1 -20 20" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 799 311.5 h 24" stroke="black" strokeWidth="3" />

                {/* Too-wah-lett */}
                <g fill="white">
                    <path d="M 800 376 V 350 H 747 V 405 H 800 V 393.5" />
                    <text x="775" y="386" textAnchor="middle" strokeWidth="1" fill="black" fontSize="18px">WC</text>
                </g>
                {/* Door */}
                <path d="M 822 374.5 a 20 20 0 0 1 -20 20" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 799 374.5 h 24" stroke="black" strokeWidth="3" />

                {/* Proppskåpet */}
                <g data-highlight="proppskap" fill="white" className={styles.room} onClick={e => fuses.current?.toggle(e)}>
                    <path d="M 800 405 V 435 H 747 V 405 Z" />
                </g>
                <ClickPopup ref={fuses}>
                    <div style={{ maxWidth: '300px' }} lang='sv'>
                        <h3 className={styles.popupTitle}>Proppskåpet</h3>
                        <p className={styles.popupText}>Här kan man byta proppar om proppen går.</p>
                        <button className={styles.copyLinkButton} onClick={() => copyHighlightLink("proppskap")}>Kopiera länk</button>
                    </div>
                </ClickPopup>

                {/* Large bathroom */}
                <g fill="white">
                    <path d="M 877 432 H 850 V 344 H 938 V 432 H 896" />
                    <text x="894" y="398" textAnchor="middle" strokeWidth="1" fill="black" fontSize="18px">WC</text>
                </g>
                {/* Door */}
                <path d="M 897 434.5 a 20 20 0 0 1 -20 20" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 875.5 434.5 v 21" stroke="black" strokeWidth="3" />

                {/* Städskrubben */}
                <g data-highlight="stadskrubben" fill="white" className={styles.room} onClick={e => cleaningRoom.current?.toggle(e)}>
                    <path d="M 850 330.5 V 344 H 938 V 302 H 850 V 313" />
                </g>
                {/* Door */}
                <path d="M 827 311.5 a 20 20 0 0 0 20 20" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 826 311.5 h 24" stroke="black" strokeWidth="3" />
                <ClickPopup ref={cleaningRoom}>
                    <div style={{ maxWidth: '300px' }} lang='sv'>
                        <h3 className={styles.popupTitle}>Städskrubben</h3>
                        <p className={styles.popupText}>Här finns diverse städutrustning.</p>
                        <button className={styles.copyLinkButton} onClick={() => copyHighlightLink("stadskrubben")}>Kopiera länk</button>
                    </div>
                </ClickPopup>

                {/* Main door */}
                <path d="M 827.5 680 a 32 32 0 0 1 -32 32" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 796 680 v 32" stroke="black" strokeWidth="3" />
                <path d="M 831.5 680 a 32 32 0 0 0 32 32" stroke="gray" strokeDasharray="5" strokeWidth="2" />
                <path d="M 863.5 680 v 32" stroke="black" strokeWidth="3" />
            </g>

            {/* Tables */}
            <g fill="#aaa" stroke="#333">
                {/* Tables left side */}
                <g className={styles.table}>
                    <rect x="352" y="386" width="70" height="30" rx="2" />
                </g>
                <g className={styles.table}>
                    <rect x="422" y="386" width="70" height="30" rx="2" className={styles.table} />
                </g>
                <g className={styles.table}>
                    <rect x="352" y="445" width="70" height="30" rx="2" className={styles.table} />
                </g>
                <g className={styles.table}>
                    <rect x="422" y="445" width="70" height="30" rx="2" className={styles.table} />
                </g>

                {/* Tables right side */}
                <g className={styles.table}>
                    <rect x="578" y="350" width="70" height="30" rx="2" className={styles.table} />
                </g>
                <g className={styles.table}>
                    <rect x="648" y="350" width="70" height="30" rx="2" className={styles.table} />
                </g>
                <g className={styles.table}>
                    <rect x="578" y="420" width="70" height="30" rx="2" className={styles.table} />
                </g>
                <g className={styles.table}>
                    <rect x="648" y="420" width="70" height="30" rx="2" className={styles.table} />
                </g>
                <g className={styles.table}>
                    <rect x="578" y="490" width="70" height="30" rx="2" className={styles.table} />
                </g>
                <g className={styles.table}>
                    <rect x="648" y="490" width="70" height="30" rx="2" className={styles.table} />
                </g>
                <g className={styles.table}>
                    <rect x="578" y="552" width="70" height="30" rx="2" className={styles.table} />
                </g>
                <g className={styles.table}>
                    <rect x="648" y="552" width="70" height="30" rx="2" className={styles.table} />
                </g>

                {/* Tables near catwalk */}
                <g className={styles.table}>
                    <rect x="475" y="258" width="30" height="55" rx="2" className={styles.table} />
                    <text x="490" y="295" textAnchor="middle" strokeWidth="1" fill="white" stroke="white" fontSize="23px">T</text>
                </g>
                <g className={styles.table}>
                    <rect x="400" y="258" width="30" height="55" rx="2" className={styles.table} />
                    <text x="415" y="295" textAnchor="middle" strokeWidth="1" fill="white" stroke="white" fontSize="23px">T</text>
                </g>
            </g>

            {/* Sofas */}
            <g className={styles.sofa} fill="#d99">
                <rect x="410" y="555" width="70" height="34" rx="5" />
                <text x="443" y="577" textAnchor="middle" strokeWidth="1" fill="black" fontSize="20px">Soffa</text>
            </g>
            <g className={styles.sofa} fill="#d99">
                <rect x="410.5" y="605.5" width="70" height="34" rx="5" />
                <text x="445" y="630" textAnchor="middle" strokeWidth="1" fill="black" fontSize="20px">Soffa</text>
            </g>

            {/* Table explainations */}
            <g textAnchor="start" strokeWidth="1" fill="black" stroke="black" fontSize="23px">
                <text x="60" y="600">T = Mindre bord av trä.</text>
                <text x="60" y="640">Stora träbord placeras</text>
                <text x="60" y="670">intill höger vägg. Resten</text>
                <text x="60" y="700">är plastbord.</text>
            </g>
        </svg>
    );
}
