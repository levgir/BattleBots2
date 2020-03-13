import React from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

function Login(props) {
    return (
        <div>
            <h2 className="loginTitle">Let's get you logged in battle bot bro! </h2>
            <hr/>
            <Form>
                <FormGroup>
                    <Label for="username">Hello there! What is your username? </Label>
                    <Input type="text" name="username" id="username" placeholder="What art though username?" value={props.username} onChange={props.handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password"> WHAT'S THE PASSWORD? Haha jk, uhh no but really what is it? </Label>
                    <Input type="password" name="password" id="password" placeholder="Psssst, what's the password?" value={props.password} onChange={props.handleInputChange} />
                </FormGroup>
                <Button onClick={props.handleLogin} color="warning" block> Shall we login? </Button>
                <p className="signupLink">
                    <Link to="/signup"> Oh no! You don't have an account? Fear not! Click here and we'll make one </Link>
                </p>
            </Form>
        </div>
    );
}

export default Login;