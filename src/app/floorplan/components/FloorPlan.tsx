import classes from './FloorPlan.module.css';

const wallWidth = 5;

export default function FloorPlan() {
    return (
        <svg width="100%" height="100%" viewBox="0 0 1000 1000">
            <rect x="10" y="10" width="1000" height="1000" stroke="lightgray" fill="white" />

            {/* Walls, rooms and other lines. */}
            <g fill="none" stroke="black" strokeWidth={wallWidth}>
                {/* Outer walls. */}
                <path d="M 375 645 H 344 L 226 484 V 285 H 190" />
                <path d="M 190 255 H 226 V 215 H 280 V 188" />
                <path d="M 312 188 V 215 H 422 V 188" />
                <path d="M 455 188 V 215 H 552 V 188" />
                <path d="M 580 188 V 215 H 594 V 225 H 720 V 250" />
                <path d="M 720 280 V 600 L 725 605 H 742 L 747 600 V 302 H 938 V 656 H 900 V 680 H 862" />
                <path d="M 798 680 H 762" />
                <path d="M 762 705 V 653 H 748 V 642 H 714 V 705 Z" />
                <path d="M 543 705 V 642 H 586 V 705 Z" />
                <path d="M 543 680 H 411 V 642 H 543" />

                {/* The bar */}
                <path d="M 375 645 V 555 L 318 475 V 382 H 350 V 470 L 408 546 V 645 Z" />

                {/* Catwalk */}
                <path d="M 225 312 H 275 V 255 H 280 M 314 255 H 594 V 227" />

                {/* Hall-ramp-vägg-grejen */}
                <path d="M 750 645 H 794 V 602" />
                <path d="M 794 602 H 810 V 475 H 794 Z" />

                {/* Media spritis */}
                <g fill="white" className={classes.room}>
                    <path d="M 190 282.5 V 368 H 150 L 38 197 H 190 V 257.5" />
                    <text x="140" y="270" textAnchor="middle" strokeWidth="1" fill="black" fontSize="23px">Me2</text>
                </g>

                {/* Mötesrummet */}
                <g fill="white" className={classes.room}>
                    <path d="M 282.5 188 H 225 V 32 H 390 V 188 H 309.5" />
                    <text x="307" y="118" textAnchor="middle" strokeWidth="1" fill="black" fontSize="23px">Mötesrummet</text>
                </g>

                {/* Media förråd */}
                <g fill="white" className={classes.room}>
                    <path d="M 424.5 188 H 405 V 32 H 540 V 188 H 452.5" />
                    <text x="472" y="118" textAnchor="middle" strokeWidth="1" fill="black" fontSize="23px">Me1</text>
                </g>

                {/* Data förråd */}
                <g fill="white" className={classes.room}>
                    {/* Invisible door paths to fill correctly. */}
                    <path d="M 650 108 V 128 L 650 188 H 554.5 Z" stroke="none" />
                    <path d="M 554.5 188 H 548 V 32 H 650 V 108" />
                    <path d="M 650 128 V 188 H 577.5" />
                    <text x="598" y="118" textAnchor="middle" strokeWidth="1" fill="black" fontSize="23px">D1</text>
                </g>

                {/* Data spritis */}
                <g fill="white" className={classes.room}>
                    <path d="M 652.5 32 H 790 V 165 H 720 V 145 H 652.5" />
                    <text x="725" y="102" textAnchor="middle" strokeWidth="1" fill="black" fontSize="23px">D2</text>
                </g>

                {/* Spökförrådet */}
                <g fill="white" className={classes.room}>
                    <path d="M 717.5 250 H 850 V 280 H 717.5" />
                    <text x="760" y="272" textAnchor="middle" strokeWidth="1" fill="black" fontSize="22px">👻</text>
                </g>

                {/* Too-wah-lett */}
                <g fill="white" className={classes.room}>
                    <path d="M 800 311 V 302 H 747 V 350 H 800 V 332" />
                    <text x="775" y="335" textAnchor="middle" strokeWidth="1" fill="black" fontSize="18px">WC</text>
                </g>

                {/* Too-wah-lett */}
                <g fill="white" className={classes.room}>
                    <path d="M 800 376 V 350 H 747 V 405 H 800 V 399" />
                    <text x="775" y="386" textAnchor="middle" strokeWidth="1" fill="black" fontSize="18px">WC</text>
                </g>

                <path d="M 800 405 V 435 H 748" />

                {/* Large bathroom */}
                <g fill="white" className={classes.room}>
                    <path d="M 877 432 H 850 V 344 H 938 V 432 H 900" />
                    <text x="894" y="398" textAnchor="middle" strokeWidth="1" fill="black" fontSize="18px">WC</text>
                </g>

                {/* Large bathroom */}
                <g fill="white" className={classes.room}>
                    <path d="M 850 332 V 344 H 938 V 302 H 850 V 311" />
                </g>
            </g>

            {/* Tables */}
            <g fill="#aaa" stroke="#333">
                {/* Tables left side */}
                <rect x="352" y="386" width="70" height="30" rx="2" className={classes.table} />
                <rect x="422" y="386" width="70" height="30" rx="2" className={classes.table} />
                <rect x="352" y="445" width="70" height="30" rx="2" className={classes.table} />
                <rect x="422" y="445" width="70" height="30" rx="2" className={classes.table} />
                <rect x="410" y="545" width="70" height="30" rx="2" className={classes.table} />

                {/* Tables right side */}
                <rect x="578" y="400" width="70" height="30" rx="2" className={classes.table} />
                <rect x="648" y="400" width="70" height="30" rx="2" className={classes.table} />
                <rect x="578" y="480" width="70" height="30" rx="2" className={classes.table} />
                <rect x="648" y="480" width="70" height="30" rx="2" className={classes.table} />
                <rect x="578" y="552" width="70" height="30" rx="2" className={classes.table} />
                <rect x="648" y="552" width="70" height="30" rx="2" className={classes.table} />

                {/* Tables near catwalk */}
                <rect x="550" y="258" width="30" height="70" rx="2" className={classes.table} />
                <rect x="475" y="258" width="30" height="70" rx="2" className={classes.table} />
                <rect x="400" y="258" width="30" height="70" rx="2" className={classes.table} />
            </g>

            {/* Sofas */}
            <g className={classes.sofa} fill="#baa">
                <rect x="684" y="290" width="34" height="70" rx="5" />
                <text x="702" y="330" textAnchor="middle" strokeWidth="1" fill="black" fontSize="20px">S</text>
            </g>
            <g className={classes.sofa} fill="#baa">
                <rect x="410.5" y="605.5" width="70" height="34" rx="5" />
                <text x="445" y="630" textAnchor="middle" strokeWidth="1" fill="black" fontSize="20px">S</text>
            </g>
        </svg>
    );
}
