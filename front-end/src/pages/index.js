import React from 'react';
import Link from 'next/link';

export default function Index(){
    return(
        <div>
            <h3>Home</h3>
            <Link href="/pacientes">
                <a>Pacientes</a>
            </Link>
            <p/>
            <Link href="/agendamentos">
                <a>Agendamentos</a>
            </Link>
        </div>

    );
}