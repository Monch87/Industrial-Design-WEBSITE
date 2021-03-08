import { Component } from 'react'
import ProjectService from '../../../service/projects.service'
import { Container, Form, Button } from 'react-bootstrap'

class ProjectFormEdit extends Component {

    constructor() {
        super()
        this.state = {
            project: undefined
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
            .editProject(this.props.project?._id, this.state)
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
                        <Form.Label>Title: </Form.Label>
                        <Form.Control type="text" name="title" defaultValue={this.props.project?.title} value={this.state.title} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date started:</Form.Label>
                        <Form.Control type="date" name="startedProject" defaultValue={this.props.project?.startedProject} innertext={this.state.startedProject} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date ended:</Form.Label>
                        <Form.Control type="date" name="endedProject" defaultValue={this.props.project?.endedProject} innertext={this.state.endedProject} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" defaultValue={this.props.project?.description} innertext={this.state.description} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>                 

                    <Form.Group>
                        <Form.Label>Image(URL):</Form.Label>
                        <Form.Control type="text" name="imageUrl" defaultValue={this.props.project?.imageUrl} value={this.state.imageUrl} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    

                    <Button variant="primary" type="submit">Save changes</Button>
                </Form>
            </Container>
        )
    }

}
export default ProjectFormEdit

// byOwnerproject(user_id) {
//     this.projectService
//         .getbyOwner(user_id)
//         .then(response => this.setState({ project: response.data }))
//         .catch(err => console.log(err))
// }


// {/* <Form.Group as="owner">
//                         <Form.Label>Owner</Form.Label>
//                         <Form.Control as="select" defaultValue="Choose...">
//                             <option>Choose...</option>
//                             {this.users?.map(elm => < option key={elm._id} value={elm._id} > {elm._id} </option> )}
//                         </Form.Control>
//                     </Form.Group> */}