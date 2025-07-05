import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { authenticateUser, setCookie } from '../../APIs/UserServices';
// import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle the sign-in logic here, like sending the data to the backend.
        console.log({ username, password });

        const user = {
            "username": username,
            "password": password
        }
        const result = await authenticateUser(user);
        if (result) {
            setCookie("token", result?.token, 1)
            // localStorage.setItem("loggedInUser", JSON.stringify(result));
            window.location.href = '/';
        }
        else
        {
            alert('Invalid credentials');
        }
    };

    return (
        <Container>
            <h2>Sign In</h2>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Sign In
                </Button>
            </Form>
        </Container>
    );
};

export default SignIn;
