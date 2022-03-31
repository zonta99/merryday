import React, {Component} from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import style from './loginBtn.module.css'

export default function LoginBtn() {
    const { data: session } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    )
}
