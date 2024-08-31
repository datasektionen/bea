import React from 'react';

interface ProfileProps {
    role: string;
    name: string;
    email?: string;
    emailType?: 'data' | 'media' | 'custom';
}

export default function Profile(props: ProfileProps) {
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

    return (
        <div>
            <h3>{props.role}</h3>
            <p>{props.name}</p>
            {props.email && (
                <p>
                    {/* TODO: Maybe make this mailto but more scrapers might find it then... */}
                    {props.email}
                    {getEmailExtension(props.emailType!)}
                </p>
            )}
        </div>
    );
}
