"use client";

import {
    createRef,
    Ref,
    useEffect,
    useImperativeHandle,
    useState,
} from "react";
import styles from "./ClickPopup.module.css";
import { createPortal } from "react-dom";

export interface ClickPopupRef {
    toggle(e: React.MouseEvent): void;
}

export interface ClickPopupProps {
    ref: Ref<ClickPopupRef>;
    children: JSX.Element;
}

export function ClickPopup({ ref, children }: ClickPopupProps) {
    const [anchor, setAnchor] = useState<HTMLElement | null>(null);
    const [x, setX] = useState<number | null>(null);
    const [y, setY] = useState<number | null>(null);
    const [maxWidth, setMaxWidth] = useState<number | null>(null);
    const containerRef = createRef<HTMLDivElement>();

    useImperativeHandle(ref, () => {
        return {
            toggle(e) {
                setAnchor(e.target as HTMLElement);
            },
        };
    }, []);

    useEffect(() => {
        if (!anchor) return;
        const viewport = document.documentElement;
        const box = anchor.getBoundingClientRect();
        let x = box.left + viewport.scrollLeft + box.width;
        let y = box.top + viewport.scrollTop;
        let maxWidth = null; // null = auto
        if (containerRef.current) {
            const popup = containerRef.current.getBoundingClientRect();
            console.log(x, popup.width);
            if (Math.floor(x) + Math.floor(popup.width) > viewport.offsetWidth) {
                x = Math.max(0, box.left + viewport.scrollLeft - popup.width);
                maxWidth = box.left + viewport.scrollLeft;
            }
        }
        setX(x);
        setY(y);
        setMaxWidth(maxWidth);
    }, [anchor, containerRef]);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (!containerRef.current?.contains(e.target as Element)) {
                setAnchor(null);
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [containerRef]);

    useEffect(() => {
        function handleResize() {
            setAnchor(null);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    if (!anchor) {
        return;
    }

    return createPortal(
        <div
            ref={containerRef}
            className={styles.container}
            style={{
                left: x + "px",
                top: y + "px",
                maxWidth: maxWidth ? maxWidth + "px" : ""
            }}
        >
            {children}
        </div>,
        document.body
    );
}
