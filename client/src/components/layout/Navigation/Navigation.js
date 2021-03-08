import { Navbar, Nav } from 'react-bootstrap'
import logo from './VAMMlogo.png'
import { NavLink, Link } from 'react-router-dom'
import AuthService from './../../../service/auth.service'

const Navigation = ({ appUser, loggedUser }) => {

    const authService = new AuthService()

    const logoutUser = () => {

        authService
            .logout()
            .then(() => appUser(undefined))
            .catch(err => console.log(err))
    }


    return (
        <Navbar className="justify-content-center" bg="transparent" variant="light" expand="md" style={{ marginBottom: 30 }}>
            <Link to="/">
                <Navbar.Brand> <img
                    alt=""
                    src={logo}
                    width="120"
                    height="80"
                    className="d-inline-block align-top"
                />{' '} </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavLink to="/" exact>
                        <Nav.Link as="span">Home</Nav.Link>
                    </NavLink>
                    <NavLink to="/projects-list">
                        <Nav.Link as="span">Projects</Nav.Link>
                    </NavLink>
                    <NavLink to="/contact">
                        <Nav.Link as="span">Contact</Nav.Link>
                    </NavLink>

                    {
                        loggedUser
                            ?
                            <div> 
                            <Nav.Link as="span" onClick = {() => logoutUser()}> Log out
                            </Nav.Link> 
                                {loggedUser.role === "ADMIN" &&
                                <NavLink to="/signup">
                                    <Nav.Link as="span"> Sign up </Nav.Link>
                                </NavLink> }
                            </div>
                            :
                            <>
                                <NavLink to="/login">
                                    <Nav.Link as="span">Log in</Nav.Link>
                                </NavLink>
                            </>
                    }
                    <NavLink to="/">  {/* TODO A LLEVAR A MI PROJECT ID DEL USER  */}
                        <Nav.Link as="span">{loggedUser ? <div>Welcome: {loggedUser.username} </div>: " "}</Nav.Link>
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation