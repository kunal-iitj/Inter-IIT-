import React from "react";
import { Link } from "react-router-dom";
// import Home from "./../components/Home.jsx"
export default function Login(){
    return (
        <>
        <main className="login-page">
            <section className="login-left">
                <div className="login-form">
                    <div className="login-header">
                        <h1>LogIn</h1>
                        <h6>Get back to jamming to your favorite tunes</h6>
                    </div>
                    <form action="">
                        <input type="text" placeholder="Username"/>
                        <input type="password"  placeholder="Password"/>
                        <button type="submit">Login</button>
                    </form>
                    <div className="registration-link">
                        <p>Don't have an account? <Link to='/signup'>Sign-Up</Link></p>
                    </div>
                </div>
            </section>

            <section className="login-right">
            </section>
        </main>
        </>
    )
}