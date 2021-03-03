import ProjectCard from './ProjectCard'
import { Row } from 'react-bootstrap'

const ProjectsList = ({projects}) => {
    return (
        <Row>
            {projects?.map(elm => <ProjectCard key={elm._id} {...elm} />)}
        </Row>
    )
}


export default ProjectsList