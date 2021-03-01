import { Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const IndexPage = () => {
    return (
        <Container as="section">
            <h1>Designer Website</h1>
            <Link to="/projects-list" className="btn btn-dark btn-sm">See Projects</Link>
        </Container>
    )
}

export default IndexPage