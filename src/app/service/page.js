import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

const ServicePage = async () => {

    const session = await getServerSession(authOptions);
    console.log(session)
    return (
        <div>
            <h2>THis is Servicec page</h2>
            {JSON.stringify(session)}
        </div>
    );
};

export default ServicePage;