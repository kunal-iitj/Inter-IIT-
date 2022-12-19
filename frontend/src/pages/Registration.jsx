import React from "react";
import { Link } from "react-router-dom";
// import Home from "./../components/Home.jsx"
export default function Registration(){
    return (
        <>
        <main className="signup-page">
        <section className="signup-left">
            </section>
            <section className="signup-right">
                <div className="signup-form">
                    <div className="signup-header">
                        <h1>Sign Up</h1>
                    </div>
                    <form action="">
                        <input type="text" placeholder="Username"/>
                        <input type="email"  placeholder="Email"/>
                        <input type="password"  placeholder="Password"/>
                        <button type="submit">Sign Up</button>
                    </form>
                    <div className="login-link">
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </div>
                </div>
            </section>

            
        </main>
        </>
    )
}