import { Component } from 'react'
import ProjectService from '../../../service/projects.service'
import { Container, Form, Button } from 'react-bootstrap'



class ProjectForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            started: '',
            ended: '',
            description: '',
            imageUrl: ''
            /*customer: '' */
        }

        this.projectService = new ProjectService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault()

        this.projectService
            .saveProject(this.state)
            .then(() => {
                this.props.closeModal()
                this.props.refreshList()
            })
            .catch(error => console.log(error))
    }


    render() {
        return (
            <Container>
                <Form onSubmit={(e) => this.handleSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Title:</Form.Label>
                        <Form.Control type="text" name="title" value={this.state.title} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Started project date:</Form.Label>
                        <Form.Control type="text" name="started" value={this.state.started} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Ended project date:</Form.Label>
                        <Form.Control type="text" name="ended" value={this.state.ended} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" innertext={this.state.description} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>                  {/* USÉ INNERTEXT EN VEZ DE VALUE  */}

                    <Form.Group>
                        <Form.Label>Image(URL):</Form.Label>
                        <Form.Control type="text" name="imageUrl" value={this.state.imageUrl} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Customer:</Form.Label>
                        <Form.Control type="text" name="customer" value={this.state.customer} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Button variant="primary" type="submit">Create new project</Button>
                </Form>

            </Container>
        )
    }

}
export default ProjectForm

