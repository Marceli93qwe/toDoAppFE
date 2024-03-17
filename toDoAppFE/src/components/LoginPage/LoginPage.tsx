import {InputBox} from "../Main/TasksSection/TaskForm/InputBox.tsx";
import "./login-page.css"
import {Button} from "../common/button.tsx";
import {useState} from "react";
import {navigate} from "../../utils/navigator.ts";
import {SectionLabel} from "../common/SectionLabel.tsx";
import {setJWTtoStorage} from "../../utils/authenticateUser.ts";

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigateToRegistrationPage = () => navigate("/register");

    const signIn = async () => {
        const response = await fetch("http://192.168.31.115:3001/auth/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const {token} = await response.json();
        console.log(token);
        setJWTtoStorage(token);
        navigate("/")
        // reload();
    }

    return (
        <div className={"auth-form"}>
            <form className={"auth-form"}>
                <h5>log in to your account</h5>
                <InputBox type={"text"} value={email} change={(e) => setEmail(e.target.value)} label={"email"}/>
                <InputBox type={"password"} value={password} change={(e) => setPassword(e.target.value)}
                          label={"password"}/>
                <Button click={signIn} text={"sign in"}/>
            </form>
            <SectionLabel>No account?</SectionLabel>
            <Button click={navigateToRegistrationPage} text={"register"}/>
        </div>
    )
}