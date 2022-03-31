import Navbar from '/components/navbar/navbar'
import { useSession, signIn, signOut } from "next-auth/react"
import LoginBtn from "/components/loginButton/loginBtn";


export default function Layout({ children}) {
    const { data: session } = useSession()
    if (!session) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )}
    return (
        <LoginBtn/>
    )
}