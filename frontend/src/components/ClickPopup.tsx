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
    const [open, setOpen] = useState(false);
    const [x, setX] = useState<number | null>(null);
    const [y, setY] = useState<number | null>(null);
    const containerRef = createRef<HTMLDivElement>();

    useImperativeHandle(ref, () => {
        return {
            toggle(e) {
                setOpen(true);
                const viewport = document.documentElement;
                const box = (e.target as Element).getBoundingClientRect();
                setX(box.left + viewport.scrollLeft + box.width);
                setY(box.top + viewport.scrollTop);
            },
        };
    }, []);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (!containerRef.current?.contains(e.target as Element)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [containerRef]);

    useEffect(() => {
        function handleResize() {
            setOpen(false);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    if (!open) {
        return;
    }

    return createPortal(
        <div
            ref={containerRef}
            className={styles.container}
            style={{
                left: x + "px",
                top: y + "px",
            }}
        >
            {children}
        </div>,
        document.body
    );
}
