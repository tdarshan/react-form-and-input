import { useState } from "react";

export default function Login() {

    const [enteredValues, setEnteredValues] = useState({
        email: '',
        password: ''
    });

    const isEmailInalid = enteredValues.email != '' && !enteredValues.email.includes('@');

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
