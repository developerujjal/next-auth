'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    const session = useSession();

    console.log(session)
    return (
        <div className='flex justify-between bg-yellow-400'>
            <ul className='flex gap-5 py-2'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/about'}>About</Link></li>
                <li><Link href={'/posts'}>Posts</Link></li>
                <li><Link href={'/service'}>Service</Link></li>
                <li><Link href={'/api/auth/sign-up'}>Sign Up</Link></li>
                <li><Link href={'/dashboard'}>Dashboard</Link></li>
            </ul>
            <div>
                {
                    session?.status === 'authenticated' ? (
                        <button onClick={() => signOut()} className='p-3 bg-green-400'>LogOut</button>
                    ) : (
                        <button onClick={() => signIn()} className='p-3 bg-green-400'>Sign In</button>
                    )
                }
            </div>
        </div>
    );
};

export default NavBar;