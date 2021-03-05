import { Component } from 'react'
import { Container, Button, Modal } from 'react-bootstrap'
import ProjectsList from './ProjectsList'
import ProjectForm from './../Project-form/Project-form'
import './Projects.css'
import ProjectService from './../../../service/projects.service'


class Projects extends Component {

    constructor() {
        super()
        this.state = {
            projects: [],
            showForm: false
        }

        this.projectService = new ProjectService()
    }

    componentDidMount() {
        this.chargingProjects()

    }

    chargingProjects() {
        this.projectService
            .getProjects()
            .then(response => this.setState({ projects: response.data }))
            .catch(err => console.log(err))
    }


    togglemodalForm(value) {
        this.setState({ showForm: value })
    }

    render() {
        return (
            <>
                <Container as="section">
                    {this.props.loggedUser && <Button onClick={() => this.togglemodalForm(true)} variant="dark" className="new-project-btn">Create new project</Button>}
                    <ProjectsList projects={this.state.projects} />
                </Container>

                <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add a Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ProjectForm closeModal={() => this.togglemodalForm(false)} refreshList={() => this.chargingProjects()} />
                    </Modal.Body>
                    {/* {user.role === "ADMIN" && <Form></Form>}  */}
                </Modal>
            </>
        )
    }
}

export default Projects