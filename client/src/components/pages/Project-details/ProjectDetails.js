import { Component } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectFormEdit from './../Project-form/Project-form-Edit'

import ProjectService from './../../../service/projects.service'

class ProjectDetails extends Component {

    constructor() {
        super()
        this.state = {
            project: undefined,
            showForm: false

        }
        this.projectService = new ProjectService()
    }

    componentDidMount() {
        this.chargingProjects()
    }

    chargingProjects() {
        const project_id = this.props.match.params.project_id

        this.projectService
            .getProject(project_id)
            .then(response => this.setState({ project: response.data }))
            .catch(err => console.log(err))
    }

    togglemodalForm(value) {
        this.setState({ showForm: value })
    }

    deleteProjects(project_id) {
        this.projectService
            .deleteProject(project_id)
            .then(response => {
                this.setState({ project: response.data })
                this.props.refreshList()
             })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <>
                <Container as="section">
                    <h1> {this.state.project?.title} </h1>
                    <Row>
                        <Col md={4}>
                            <hr />
                            <img style={{ width: '100%' }} src={this.state.project?.imageUrl} alt={this.state.project?.title} />
                            <hr />
                        </Col>
                        <Col md={4}>
                            <h3> Details: </h3>
                            <hr />
                            <p>Started: {this.state.project?.startedProject}</p>
                            <p>Ended: {this.state.project?.endedProject}</p>
                            <p>Description: {this.state.project?.description}</p>
                            {this.props.loggedUser?.role === "ADMIN" ?
                                <div>
                                    <Button onClick={() => this.togglemodalForm(true)} variant="outline-secondary" size="sm" style={{ width: '50%' }}>
                                        <Link to={`/details/${this.state.project?._id}`} className="btn secondary"><h2>Edit</h2></Link>
                                    </Button>
                                    <Button onClick={() => this.deleteProjects(this.state.project?._id)} variant="outline-secondary" size="sm" style={{ width: '50%' }}>
                                        <Link to="/projects-list" className="btn secondary"><h2>Delete</h2></Link>
                                    </Button>
                                </div> : ""}
                            <Link to="/projects-list" className="btn btn-dark">Go back</Link>
                            <hr />
                        </Col>
                    </Row>
                </Container>


                <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ProjectFormEdit closeModal={() => this.togglemodalForm(false)} project={this.state.project} refreshList={() => this.chargingProjects()} />{/*users={this.users}*/}
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}

export default ProjectDetails


