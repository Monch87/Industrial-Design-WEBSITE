import { Component } from 'react'
import { Form, Button, Container, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import ContactService from './../../../service/contact.service'



class SendContact extends Component {

    constructor() {
        super()
        this.state = {
            contact: {
                subject: '',
                name: '',
                email: '',
                message: ''
            }
        }

        this.contactService = new ContactService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ contact: { ...this.state.contact, [name]: value } })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.contactService
            .sendMail(this.state.contact)
            .then(this.props.history.push("/"))
            .catch(error => console.log(error))
    }


    render() {
        return (

            <Container>
                <div>
                    <h3>Leave me a message</h3>
                    <hr />
                    <p>  For any questions about services, do not hesitate to contact me through the following form.</p>
                </div>
                <br />

                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group as={Col} controlId="formGridEmail">

                        <Form.Label>Subject:</Form.Label>
                        <Form.Control type="text" name="subject" placeholder="Enter subject" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter name" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>


                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>


                    <Form.Group>
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={3} name="message" placeholder="Enter message" onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Send message</Button>
                </Form>

            </Container>

        )
    }
}

export default SendContact
