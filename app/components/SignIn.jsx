'use client';
import React from 'react';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignInButton = () => {
    const { data: session } = useSession();

    if (session && session.user) {
        return (
            <div className="absolute right-4 top-4">
                <p>Hi {session.user.email}</p>
                <button
                    className="text-black bg-main-pink py-1 px-2 border-2 rounded-md border-black"
                    onClick={() => signOut()}
                >
                    Sign Out
                </button>
            </div>
        );
    }

    return (
        <div className="absolute right-4 top-4">
            <button
                className="text-black bg-main-pink py-1 px-2 border-2 rounded-md border-black"
                onClick={() => signIn()}
            >
                Sign In
            </button>
        </div>
    );
};

export default SignInButton;
