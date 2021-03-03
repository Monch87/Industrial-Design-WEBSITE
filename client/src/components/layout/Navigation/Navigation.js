import { Navbar, Nav } from 'react-bootstrap'
import logo from './VAMMlogo.png'
import { NavLink, Link } from 'react-router-dom'
import AuthService from './../../../service/auth.service'

const Navigation = ({ storeUser, loggedUser }) => {

    const authService = new AuthService()

    const logoutUser = () => {

        authService
            .logout()
            .then(() => storeUser(undefined))
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
                    {/* <NavLink to="/services">
                        <Nav.Link as="span">Services</Nav.Link>
                    </NavLink> */}
                    <NavLink to="/contact">
                        <Nav.Link as="span">Contact</Nav.Link>
                    </NavLink>

                    {
                        loggedUser
                            ?
                            <Nav.Link as="span" onClick={() => logoutUser()}>Log out</Nav.Link>
                            :
                            <>
                                <NavLink to="/signup">
                                    <Nav.Link as="span">Sign up</Nav.Link>
                                </NavLink>
                                <NavLink to="/login">
                                    <Nav.Link as="span">Log in</Nav.Link>
                                </NavLink>
                            </>
                    }

                    {/* <NavLink to="/perfil">
                        <Nav.Link as="span">Bienvenid@, {loggedUser ? loggedUser.username : 'invitado'}</Nav.Link>
                    </NavLink> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation