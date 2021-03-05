import { Component } from 'react'
import AuthService from '../../../service/auth.service'

import { Form, Button, Container, Row, Col } from 'react-bootstrap'

class Signup extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }

        this.authService = new AuthService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.authService
            .signup(this.state)
            .then(response => {
                this.props.appUser(response.data)
                this.props.history.push('/profile')
            })
            .catch(err => console.log({ err }))
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>

                        <h1>User register</h1>
                        <hr />

                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={this.state.username} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={this.state.password} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>

                            {/* <Form.Group>
                                <Form.Label>Avatar</Form.Label>
                                <Form.Control type="text" name="avatar" value={this.state.avatar} onChange={e => this.handleInputChange(e)} />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Role</Form.Label>
                                <Form.Control type="text" name="role" value={this.state.role} onChange={e => this.handleInputChange(e)} />
                            </Form.Group> */}

                            <Button variant="dark" block type="submit">Register</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}



export default Signup