import {SectionLabel} from "../common/SectionLabel.tsx";
import {Button} from "../common/button.tsx";
import {navigate} from "../../utils/navigator.ts";
import {useState} from "react";
import {InputBox} from "../Main/TasksSection/TaskForm/InputBox.tsx";

export const Register = () => {
    const navigateToLoginPage = () => navigate("/login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const signUp = async () => {
        const response = await fetch("http://192.168.31.115:3001/auth/register", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password,
                username
            })
        })
        console.log(await response.json());
    }
    return (
        <div className={"auth-form"}>
            <form className={"auth-form"}>
                <h5>register new account</h5>
                <InputBox type={"text"} value={username} change={(e) => setUsername(e.target.value)}
                          label={"username"}/>
                <InputBox type={"text"} value={email} change={(e) => setEmail(e.target.value)} label={"email"}/>
                <InputBox type={"password"} value={password} change={(e) => setPassword(e.target.value)}
                          label={"password"}/>
                <Button click={signUp} text={"sign up"}/>
            </form>
            <SectionLabel>Already have an account?</SectionLabel>
            <Button click={navigateToLoginPage} text={"login"}/>
        </div>
    )
}