import React, { useState } from 'react';


const RegisterForm = props => {
    const [ valueState, setValueState ] = useState({ // create form inputs for form
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const onChangeHandler = event => {
        setValueState({
            ...valueState,
            [event.target.name]: event.target.value
        });
    }

    const onSubmitHandler = event => {
        event.preventDefault();
    }

    return(
        <div>
            <form onSubmit={onSubmitHandler}>
                <label>First Name:</label>
                <input type="text" name='firstName' onChange={onChangeHandler}/>
                <br/>
                <label>Last Name:</label>
                <input type="text" name='lastName' onChange={onChangeHandler}/>
                <br/>
                <label>Email:</label>
                <input type="email" name='email' onChange={onChangeHandler}/>
                <br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                <br/>
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                <br/>
                <input type="submit" />
            </form>
            <div>
                <p><b>First Name:</b> {valueState.firstName}</p>
                <p><b>Last Name:</b> {valueState.lastName}</p>
                <p><b>Email:</b> {valueState.email}</p>
                <p><b>Password:</b> {valueState.password}</p>
                <p><b>Confirm Password:</b> {valueState.confirm}</p>
            </div>
        </div>
    );
}

export default RegisterForm