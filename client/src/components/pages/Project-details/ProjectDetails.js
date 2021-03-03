import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ProjectService from './../../../service/projects.service'

class ProjectDetails extends Component {
    
    constructor() {
        super()
        this.state = {
            project: undefined
        }
        this.projectService = new ProjectService()
    }

    componentDidMount() {

        const project_id = this.props.match.params.project_id

        this.projectService
            .getProject(project_id)
            .then(response => this.setState({ project: response.data }))
            .catch(err => console.log(err))
    }



    render() {
        return (
            <Container as="section">
                <h1> {this.state.project?.title} </h1>
                <Row>
                    <Col md={4}>
                        <hr />
                        <img style= {{width: '100%'}} src={this.state.project?.imageUrl} alt={this.state.project?.title} />
                        <hr />
                    </Col> 
                    <Col md={4}>
                        <h3> Details: </h3>
                        <hr />
                        <p>{this.state.project?.description}</p>
                        <p>{this.state.project?.Started_Date}</p>
                        <p>{this.state.project?.End_Date}</p>
                        <Link to="/projects-list" className="btn btn-dark">Go back</Link>
                        <hr />
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default ProjectDetails


