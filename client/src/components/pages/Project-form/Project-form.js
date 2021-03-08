import { Component } from 'react'
import ProjectService from '../../../service/projects.service'
import { Container, Form, Button } from 'react-bootstrap'



class ProjectForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: props.project?.title || '',
            startedProject: this.formatDate(props.project?.startedProject),
            endedProject: this.formatDate(props.project?.endedProject),
            description: props.project?.description || '',
            imageUrl: props.project?.imageUrl || '',
            owner: props.project?.owner || '',
            review: '',
            users: []
        }

        this.projectService = new ProjectService()
    }

    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit(e) {

        e.preventDefault()

        if (this.props.project) {
            this.projectService
                .editProject(this.props.project?._id, this.state)
                .then(() => {
                    this.props.closeModal()
                    this.props.refreshList()
                })
                .catch(error => console.log(error))
        } else {
            if (this.state.owner = '')
                this.state.owner = this.props.user_id
            this.projectService
                .saveProject(this.state)
                .then(() => {
                    this.props.closeModal()
                    this.props.refreshList()
                })
                .catch(error => console.log(error))
        }
    }

    formatDate(date) {
        if (date == null)
            return null
        else
            return new Date(date).toISOString().slice(0, 10)
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers() {
        this.projectService
            .getCustomers()
            .then(response => this.setState({ users: response.data }))
            .catch(err => console.log(err))
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
                        <Form.Label>Date started:</Form.Label>
                        <Form.Control type="date" name="startedProject" value={this.state.startedProject} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Date ended:</Form.Label>
                        <Form.Control type="date" name="endedProject" value={this.state.endedProject} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Description:</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" value={this.state.description} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Image(URL):</Form.Label>
                        <Form.Control type="text" name="imageUrl" value={this.state.imageUrl} onChange={e => this.handleInputChange(e)} />
                    </Form.Group>

                    {/* <Form>
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Example file input" />
                        </Form.Group>
                    </Form> */}

                    <Form.Group as="owner">
                        <Form.Label>Owner</Form.Label>
                        <Form.Control as="select" name="owner" defaultValue="Choose..." onChange={e => this.handleInputChange(e)}>
                            <option>Choose...</option>
                            {this.state.users?.map(elm => < option value={elm._id}> {elm.username} </option>)}
                        </Form.Control>
                    </Form.Group>

                    <Button variant="primary" type="submit">Done</Button>
                </Form>
            </Container>
        )
    }

}
export default ProjectForm


// byOwnerproject(user_id) {
//     this.projectService
//         .getbyOwner(user_id)
//         .then(response => this.setState({ project: response.data }))
//         .catch(err => console.log(err))
// }