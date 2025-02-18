import { useCallback, useEffect, useState } from 'react';
import styles from './PulsatingCircle.module.css';
import { createPortal } from 'react-dom';

interface PulsatingCircleProps {
    anchor: Element;
};

export default function PulsatingCircle({ anchor }: PulsatingCircleProps) {
    const calculatePos = useCallback(() => {
        const box = anchor.getBoundingClientRect();
        const viewport = document.documentElement;

        const centerX = box.x + viewport.scrollLeft + box.width / 2;
        const centerY = box.y + viewport.scrollTop + box.height / 2;
        const size = Math.max(box.width, box.height) + 5;
        
        return [centerX, centerY, size];
    }, [anchor]);

    const [[x, y, size], setPos] = useState(calculatePos());

    useEffect(() => {
        function handleResize() {
            setPos(calculatePos());
        }
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [calculatePos]);

    return createPortal(
        <div className={styles.circle} style={{
            left: x + "px",
            top: y + "px",
            "--pulsating-circle-size": size + "px",
        } as React.CSSProperties} />,
        document.body
    );
}