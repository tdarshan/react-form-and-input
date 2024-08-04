import { useState } from "react";
import Input from "./Input";

import {isEmail, isNotEmpty, hasMinLength} from '../util/validation.js'

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    })

    const isEmailInvalid = didEdit.email && 
                            isEmail(enteredValues.email) && 
                            !isNotEmpty(enteredValues.email);
    const isPasswordInvalid = didEdit.password && 
                                hasMinLength(enteredValues.password, 6) &&
                                !isNotEmpty(enteredValues.password);

    const handleSubmit = function (e) {
        e.preventDefault();

        console.log(enteredValues);

        setEnteredValues({
            email: '',
            password: ''
        });
    }

    const inputChange = function (e) {
        setEnteredValues((prevValues) => {
            return {
                ...prevValues,
                [e.target.name]: e.target.value
            }
        });

        setDidEdit((prev) => {
            return {
                ...prev,
                [e.target.name]: false
            }
        })
    }

    const handleInputBlur = function (e) {
        setDidEdit((prev) => {
            return {
                ...prev,
                [e.target.name]: true
            }
        })
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
                    value={enteredValues.email}
                    onChange={inputChange}
                    onBlur={handleInputBlur}
                    error={isEmailInvalid && "Invalid email syntex!"}
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    value={enteredValues.password}
                    onChange={inputChange}
                    onBlur={handleInputBlur}
                    error={isPasswordInvalid && "Password must be minimum of 6 characters!"}
                />

            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
