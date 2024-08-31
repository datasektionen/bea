import React from 'react';
import Info from '@/components/Info';
import styles from './page.module.css';

export default function Home() {
    return (
        <div>
            <Info title="Välkommen till METAdorernas sida!">
                <h3>Leveransadress</h3>
                <p>Osquars Backe 21</p>
            </Info>
        </div>
    );
}
