'use client'
import React from 'react';

const SignUP = () => {

    const handleSignUP = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const newUser = {
            name,
            email,
            password,
            role: 'guest'
        }

        const result = await fetch('http://localhost:3000/api/auth/sign-up/new-user', {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-type": "application/json"
            }
        })

        console.log(result)

    }



    return (
        <div className='flex  justify-center items-center'>
            <form
                onSubmit={handleSignUP}
                className='flex flex-col w-[30%]'>
                <input type='text' name='name' className='border' placeholder='Full Name' />
                <input type='email' name='email' className='border' placeholder='Your Email' />
                <input type='password' name='password' className='border' placeholder='Your Password' />
                <button type='submit' className='p-2 bg-green-400'>Sign Up</button>
            </form>
        </div>
    );
};

export default SignUP;