import { Card, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title,imageUrl, _id }) => {

    return (
        <Col md={6} className= "project-card">
            <Card>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Link to={`/details/${_id}`} className=""><h2>{title}</h2></Link>
                    {/* <Link to={`/details/${_id}`} className="btn btn-dark btn-sm btn-block">Details</Link> */}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectCard