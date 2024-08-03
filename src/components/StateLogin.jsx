import { useState } from "react";

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    const [didEdit, setDidEdit] = useState({
        email: false,
        password: false
    })

    const isEmailInalid = didEdit.email && !enteredValues.email.includes('@');

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

    const handleInputBlur = function(e) {
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
                <div className="control no-margin">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={enteredValues.email}
                        onChange={inputChange}
                        onBlur={handleInputBlur}
                    />
                    <div className="control-error">
                        {isEmailInalid && <p className="error">Invalid email</p>}
                    </div>
                </div>

                <div className="control no-margin">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        value={enteredValues.password}
                        onChange={inputChange}
                    />
                </div>
            </div>

            <p className="form-actions">
                <button className="button button-flat">Reset</button>
                <button className="button">Login</button>
            </p>
        </form>
    );
}
