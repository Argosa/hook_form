import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const RegisterForm = props => {
    const [ valueState, setValueState ] = useState({ // create form inputs for form
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        submitted: false
    })

    const onChangeHandler = event => {
        setValueState({
            ...valueState,
            [event.target.name]: event.target.value
        });
    }

    let message;
    if(valueState.submitted){
        message=<h1>You have submitted the form</h1>
    } else {
        message=<h1>You have not yet submitted the form</h1>
    }

    const onSubmitHandler = event => {
        event.preventDefault();
        setValueState({
            ...valueState,
            submitted: true
        })
    }

    return(
        <div>
            <Alert varient='warning'>
                <Alert.Heading>{message}</Alert.Heading>
            </Alert>
            <form onSubmit={onSubmitHandler}>
                <label>First Name:</label>
                <input type="text" name='firstName' onChange={onChangeHandler}/>
                { valueState.firstName.length < 2 && <p>Your name must be two characters or more. </p> }
                <br/>
                <label>Last Name:</label>
                <input type="text" name='lastName' onChange={onChangeHandler}/>
                { valueState.lastName < 2 && <p>Your name must be two characters or more. </p> }
                <br/>
                <label>Email:</label>
                <input type="email" name='email' onChange={onChangeHandler}/>
                { valueState.password.length < 2 && <p>Your Email must be 2 characters or more</p>}
                <br/>
                <label>Password:</label>
                <input type="password" name="password" onChange={onChangeHandler}/>
                { valueState.password.length < 8 && <p>Your Password must be 8 characters or more</p>}
                <br/>
                <label>Confirm Password:</label>
                <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
                { valueState.confirmPassword.length < 8 && <p>Your Password must be 8 characters or more</p>}
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