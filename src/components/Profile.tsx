import React from 'react';

interface ProfileProps {
    role: string;
    name: string;
    email: string;
    media?: boolean;
}

export default function Profile(props: ProfileProps) {
    const media = props.media; /* Om median */
    return (
        <div>
            <h3>{props.role}</h3>
            <p>{props.name}</p>
            <p>
                {props.email}
                {media ? '@medieteknik.se' : '@datasektionen.se'}
            </p>
        </div>
    );
}
