import { useState } from "react";
import Input from "./Input";

import { isEmail, isNotEmpty, hasMinLength } from '../util/validation.js'
import { useInput } from "../hooks/useInput.js";

export default function Login() {

    const {
        value: emailValue,
        setValue: setEmailValue,
        handleInputChange: handleEmailChange,
        setIsEdit: setIsEmailEdit,
        handleInputBlur: handleEmailBlur,
        hasError: emailHasError
    } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

    const {
        value: passwordValue,
        setValue: setPasswordValue,
        setIsEdit: setIsPasswordEdit,
        handleInputChange: handlePasswordChange,
        handleInputBlur: handlePasswordBlur,
        hasError: passwordHasError
    } = useInput('', (value) => hasMinLength(value, 6) );


    const handleSubmit = function (e) {
        e.preventDefault();

        if(emailHasError || passwordHasError) {
            return;
        }

        console.log(emailValue, passwordValue);
        setEmailValue('');
        setPasswordValue('');
        setIsEmailEdit(false);
        setIsPasswordEdit(false);

    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h2>Login</h2>

            <div className="control-row">

                <Input
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    value={emailValue}
                    onChange={handleEmailChange}
                    onBlur={handleEmailBlur}
                    error={emailHasError && "Invalid email syntex!"}
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    onBlur={handlePasswordBlur}
                    error={passwordHasError && "Password must be minimum of 6 characters!"}
                />

            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
