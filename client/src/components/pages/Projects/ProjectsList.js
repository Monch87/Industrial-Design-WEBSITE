import ProjectCard from './ProjectCard'
import { Row } from 'react-bootstrap'

const ProjectsList = ({ projects, loggedUser}) => {
    return (
        <Row>
            {projects?.map(elm => <ProjectCard key={elm._id} {...elm} loggedUser={loggedUser}/>)}
        </Row>
    )
}


export default ProjectsList