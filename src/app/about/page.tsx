import React from 'react';
import Info from '@/components/Info';
import Profile from '@/components/Profile';
import styles from './page.module.css';
import { useMETAdorer } from './helpers';
import { rolesInfo, sortedRoles } from './types';

export default function About() {
    const internFunkisar = useMETAdorer();

    return (
        <div>
            <Info title="Vilka är METAdorerna?">
                <p>Här hittar du information och kontaktuppgifter till internfunktionärsposterna.</p>
                <p>
                    Vill du gå med? Fyll i formuläret här: <a href="/#">länk</a>
                </p>
            </Info>
            <div className={styles.roles}>
                {sortedRoles.map((role) => {
                    if (internFunkisar[role].length) {
                        return internFunkisar[role].map((person) => (
                            <Profile
                                key={`${role}-${person.name}`}
                                role={rolesInfo[role].name}
                                name={person.name}
                                email={person.email}
                                emailType={person.emailType}
                            />
                        ));
                    } else {
                        return (
                            <Profile
                                key={role}
                                role={rolesInfo[role].name}
                                name={'Vakant'}
                            />
                        );
                    }
                })}
            </div>
        </div>
    );
}
