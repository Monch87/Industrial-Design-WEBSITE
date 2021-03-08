import { Card, Col, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProjectCard = ({ title, imageUrl, _id, loggedUser }) => {

    return (
        <Col md={6} className= "project-card">
            <Card>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <div> Take a look to:
                    <Link to={`/details/${_id}`} className=""> <h2> {title}</h2> </Link></div>
                </Card.Body>
            </Card>
        </Col>


    )
}

export default ProjectCard

