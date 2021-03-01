import { Component } from 'react'
import ProjectService from './../../../service/projects.service'
import { Container, Button } from 'react-bootstrap'
import ProjectsList from './ProjectsList'


class Projects extends Component {


    constructor(){
        super ()
        this.state = {
            projects: []
        }

        this.projectService = new ProjectService()
    }

    componentDidMount(){

        this.projectService
        .getProjects()
        .then (response => this.setState({ projects: response.data }))
        .then (err => console.log (err))
    } 

    render (){
        return (
            <>
                <Container>
                    <h1>Check all projects!</h1>
                    <hr />
                    <Button onClick={() => this.togglemodalForm(true)} variant="dark" className="new-project-btn">Create new project</Button>
                    <ProjectsList projects={this.state.projects} />
                </Container>
            </>
        )
    }
}

export default Projects