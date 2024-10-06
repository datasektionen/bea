import React from 'react';
import styles from './Profile.module.css';
import { Role, rolesInfo } from '@/app/about/types';

interface ProfileProps {
    role: Role;
    people: {
        name: string;
        email?: string;
        emailType?: 'data' | 'media' | 'custom';
    }[];
}

function getEmailExtension(emailType: string) {
    switch (emailType) {
        case 'data':
            return '@datasektionen.se';
        case 'media':
            return '@medieteknik.se';
        default:
            return '';
    }
}

export default function Profile(props: ProfileProps) {
    const { name: roleName, description } = rolesInfo[props.role];

    return (
        <div className={styles.container}>
            <h2>{roleName}</h2>
            <p style={{ width: '100%' }}>{description}</p>
            <div className={styles.personList}>
                {props.people.map((person) => (
                    <div
                        key={person.name}
                        className={styles.personItem}>
                        <h4>{person.name}</h4>
                        {person.email && person.emailType && (
                            <p>
                                {/* TODO: Maybe make this mailto but more scrapers might find it then... */}
                                {person.email}
                                {getEmailExtension(person.emailType)}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
