import classes from './FloorPlan.module.css';

const wallWidth = 5;

export default function FloorPlan() {
    return (
        <svg width="100%" height="100%" viewBox="0 0 1000 1000">
            <rect x="10" y="10" width="1000" height="1000" stroke="lightgray" fill="white" />

            {/* Walls */}
            <g fill="none" stroke="black" strokeWidth={wallWidth}>
                {/* Outer walls. */}
                <path d="M 375 645 H 344 L 226 484 V 285" />
                <path d="M 226 255 V 215 H 280 V 188" />
                <path d="M 312 188 V 215 H 422 V 188" />
                <path d="M 455 188 V 215 H 552 V 188" />
                <path d="M 580 188 V 215 H 594 V 225 H 720 V 250" />
                <path d="M 720 280 V 600 L 725 605 H 742 L 747 600 V 302 H 938 V 656 H 900 V 680 H 862" />
                <path d="M 798 680 H 762" />
                <path d="M 762 705 V 653 H 748 V 642 H 714 V 705 Z" />
                <path d="M 543 705 V 642 H 586 V 705 Z" />
                <path d="M 543 680 H 411 V 642 H 543" />
                
                {/* The bar. */}
                <path d="M 375 645 V 555 L 318 475 V 382 H 350 V 470 L 408 546 V 645 Z" fill="none" stroke="black" strokeWidth={wallWidth} />
            </g>

            {/* Tables left side */}
            <rect x="352" y="386" width="50" height="25" rx="3" className={classes.table} />
            <rect x="402" y="386" width="50" height="25" rx="3" className={classes.table} />
            <rect x="352" y="445" width="50" height="25" rx="3" className={classes.table} />
            <rect x="402" y="445" width="50" height="25" rx="3" className={classes.table} />
            <rect x="410" y="540" width="50" height="25" rx="3" className={classes.table} />

            {/* Tables right side */}
            <rect x="618" y="400" width="50" height="25" rx="3" className={classes.table} />
            <rect x="668" y="400" width="50" height="25" rx="3" className={classes.table} />
            <rect x="618" y="480" width="50" height="25" rx="3" className={classes.table} />
            <rect x="668" y="480" width="50" height="25" rx="3" className={classes.table} />
            <rect x="618" y="552" width="50" height="25" rx="3" className={classes.table} />
            <rect x="668" y="552" width="50" height="25" rx="3" className={classes.table} />
        </svg>
    );
}

export interface TableProps {
    x: number;
    y: number;
    width: number;
    height: number;
}

export function Table({ x, y, width, height }: TableProps) {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect width={width} height={height} fill="brown" />
            <text x="25" y="65" textAnchor="middle">
                {'hello!'}
            </text>
        </g>
    );
}
