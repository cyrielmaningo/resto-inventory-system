import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  return (
    <div style={{marginLeft: '500px'}}>
        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{marginLeft: '250px'}}>
                Login
            </Button>
        </Form>
    </div>
  );
}

export default Login;