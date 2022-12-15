import React from "react";
import { useState } from "react";
import { useLoginUserMutation } from "../services/userAuthApi";
import { storeToken, removeToken } from "../services/localStorage";

export default function Login(){

    const [serverError, setServerError] = useState({})
    const [loginUser, {isLoading}] = useLoginUserMutation()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
          email: data.get('email'),
          password: data.get('password'),
        }
        const res = await loginUser(actualData)
        if (res.error) {
            console.log(typeof (res.error.data.errors))
            console.log(res.error)
            setServerError(res.error.data.errors)

            for(var key in serverError){
            var value = serverError[key]
            alert([key + ": " + value[0]])
            }
            removeToken()

        }
        if (res.data) {
          console.log(res.data.token)
          storeToken(res.data.token)
        }
      }

    
    return (
        <>
        <main className="login-page">
            <section className="login-left">
                <div className="login-form">
                    <div className="login-header">
                        <h1>LogIn</h1>
                        <h6>Get back to jamming to your favorite tunes</h6>
                    </div>
                    <form action="" id="login-form" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Email" name="email"/>
                        <input type="password"  placeholder="Password" name="password"/>
                        <button type="submit">Login</button>
                    </form>
                    <div className="registration-link">
                        <p>Don't have an account? link</p>
                    </div>
                </div>
            </section>

            <section className="login-right">
            </section>
        </main>
        </>
    )
}