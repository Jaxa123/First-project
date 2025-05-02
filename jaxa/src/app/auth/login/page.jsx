"use client"
import { useState } from "react"
// import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
// import { toast } from "react-toastify"
// import { auth } from "@/firebase/config"
import Link from "next/link"
import "../style.scss"
import { useRouter } from 'next/navigation'
// import { FcGoogle } from "react-icons/fc";


function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const router = useRouter()

    function submitForm(e) {
        e.preventDefault()

        for (let key in formData) {
            if (formData[key] === "") {
                toast.error("Please fill in all fields", { theme: "dark" })
                alert("Please fill in all fields")
                return
            }
        }

        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                const user = userCredential.user
                // Set session cookie
                document.cookie = `session=${user.uid}; path=/; max-age=3600; secure; samesite=strict`
                toast.success("Signed in successfully!", { theme: "dark" })
                router.push('/')
            })
            .catch((error) => {
                toast.error(error.message, { theme: "dark" })
                alert(error.message)
                router.push('/auth/login')
            })
    }

    function handleFormChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    async function handleGoogleSignIn() {
        try {
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            // Set session cookie
            document.cookie = `session=${user.uid}; path=/; max-age=3600; secure; samesite=strict`
            toast.success("Signed in with Google successfully!", { theme: "dark" })
            router.push('/')
        } catch (error) {
            toast.error(error.message, { theme: "dark" })
        }
    }
    return (
    <>
    <main>
        <h1>Login</h1>
        <form action="/login" method="POST">
         
            <input type="text" id="username" name="username" required placeholder="Enter your username ..."/><br/><br/>
 
            <input type="password" id="password" name="password" required placeholder="Password"/><br/><br/>
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link href="/auth/register">Register here</Link></p>
    </main>
    </>
    )
}

export default Login;