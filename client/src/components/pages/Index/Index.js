import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import homeimg from './VAMM66.jpg'

const IndexPage = () => {
    return (
        <Container as="section">
            <Image src={homeimg} fluid/>
            {/* <h1>Take a look what I have done</h1> */}
            <Link to="/projects-list" className="btn btn-outline-secondary btn-sm">See Projects</Link>
        </Container>
    )
}

export default IndexPage