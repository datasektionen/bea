import React from 'react';
import Info from '@/components/Info';
import Profile from '@/components/Profile';
import styles from './page.module.css';
import { useMETAdorer } from './helpers';
import { sortedRoles } from './types';

export default function About() {
    const internFunkisar = useMETAdorer();

    return (
        <div>
            <Info title="Vilka är METAdorerna?">
                <div className={styles.infoTextContainer}>
                    <p style={{ lineHeight: '1.1em', textAlign: 'center' }}>
                        METAdorerna är en delad nämnd mellan datasektionen och sektionen för medieteknik. Vi är de som
                        tar hand om vår fantastiska sektionslokal META och ser till att den är en trevlig plats att
                        vistas på. Vi har möten varje fredaglunch som just du gärna får komma på! För att få info om var
                        mötet hålls så går du lättast med i METAdorerna genom formuläret nedan.
                    </p>
                    <h3>
                        Vill du gå med? Fyll i formuläret:{' '}
                        <a
                            href="https://www.dsekt.se/blimetad"
                            target="_blank">
                            Bli METAd
                        </a>
                    </h3>
                </div>
            </Info>
            <div className={[styles.roles, styles.lokalchefer].join(' ')}>
                {sortedRoles.slice(0, 2).map((role) => {
                    return (
                        <Profile
                            key={role}
                            role={role}
                            people={internFunkisar[role].length ? internFunkisar[role] : [{ name: 'Vakant' }]}
                        />
                    );
                })}
            </div>
            <div className={styles.roles}>
                {sortedRoles.slice(2).map((role) => {
                    return (
                        <Profile
                            key={role}
                            role={role}
                            people={internFunkisar[role].length ? internFunkisar[role] : [{ name: 'Vakant' }]}
                        />
                    );
                })}
                <Profile
                    key="ägg"
                    role="ägg"
                    people={[]}
                />
            </div>
        </div>
    );
}
