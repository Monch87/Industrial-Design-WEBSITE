import { Component } from 'react'
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectForm from './../Project-form/Project-form'
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
                this.props.history.push("/projects-list")
            })
            .catch(err => console.log(err))
    }

    formatDate(date) {
        if (date == null)
            return null
        else
            return new Date(date).toISOString().slice(0, 10)
    }

    editReview(){
        this.projectService
            .editProject(this.state.project?._id, this.state)
            .then(response => {
                this.setState({ project: response.data })
                this.chargingProjects()
            })
            .catch(error => console.log(error))
    }
    
    handleInputChange(e) {
        const { name, value } = e.target
        this.setState({ [name]: value })
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
                            <p>Started: {this.formatDate(this.state.project?.startedProject)}</p>
                            <p>Ended: {this.formatDate(this.state.project?.endedProject)}</p>
                            <p>Description: {this.state.project?.description}</p>
                            {this.props.loggedUser?.role === "ADMIN" ?
                                <div>
                                    <Button onClick={() => this.togglemodalForm(true)} variant="outline-secondary" size="sm" style={{ width: '30%' }}>
                                        <Link to={`/details/${this.state.project?._id}`} className="btn">Edit</Link>
                                    </Button>
                                    <Button onClick={() => this.deleteProjects(this.state.project?._id)} variant="outline-secondary" size="sm" style={{ width: '30%' }}>
                                        <Link to="/projects-list" className="btn">Delete</Link>
                                    </Button>
                                </div> : ""}

                            {this.state.project?.owner === this.props.loggedUser?._id || this.props.loggedUser?.role === "ADMIN" ?
                            <Form.Group>
                                <Form.Label> Review :</Form.Label>
                                <Form.Control as="textarea" rows={3} name="review" placeholder="Leave your review here" onChange={e => this.handleInputChange(e)}/>
                                <Button onClick={() => this.editReview()} variant="outline-secondary" size="sm" style={{ width: '30%' }}>
                                  <Link to={`/details/${this.state.project?._id}`}  placeholder="Search"  className="btn">Save</Link>
                                </Button>
                            </Form.Group>
                            : "" }
                                
                            <Link to="/projects-list" className="btn btn-dark">Go back</Link>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <h3><i>Our client said about us:</i></h3> {(this.state.project?.review)}
                    </Row>     {/* ver que cambio de aqui, si dejo el nombre del user o no */}
                </Container>
                         
                         
                <Modal show={this.state.showForm} onHide={() => this.togglemodalForm(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ProjectForm closeModal={() => this.togglemodalForm(false)} project={this.state.project} refreshList={() => this.chargingProjects()}/>
                    </Modal.Body>
                </Modal>
            </>
        )
    }

}

export default ProjectDetails


