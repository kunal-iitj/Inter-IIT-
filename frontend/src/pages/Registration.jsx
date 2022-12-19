import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRegisterUserMutation } from "../services/userAuthApi";
import { storeToken } from "../services/localStorage";

// import Home from "./../components/Home.jsx"
export default function Registration(){

    const [serverError, setServerError] = useState({})
    const [registerUser, {isLoading}] = useRegisterUserMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          email: data.get('email'),
          user_name: data.get('user_name'),
          password: data.get('password'),
          password2: data.get('password2'),
        }
        const res = await registerUser(actualData)
        if (res.error) {
            // console.log(typeof (res.error.data.errors))
            // console.log(res.error)
            setServerError(res.error.data.errors)

            let errorAlert = ""

            for(var key in serverError){
                var value = serverError[key]
                key = (key == "non_field_errors")?"Error":key
                errorAlert += key + ": " + value[0] + '\n'
            }
            alert(errorAlert)

        }
        if (res.data) {
        //   console.log(res.data.token)
          alert(res.data.msg)
          storeToken(res.data.token)
        }
    }

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
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" name="user_name" placeholder="Username"/>
                        <input type="email"  name="email" placeholder="Email"/>
                        <input type="password"  name="password" placeholder="Password"/>
                        <input type="password"  name="password2" placeholder="Enter Password Again"/>
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