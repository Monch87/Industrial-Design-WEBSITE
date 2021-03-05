import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'
import Projects from '../pages/Projects/Projects'
import ProjectDetails from '../pages/Project-details/ProjectDetails'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'

const Routes = ({ appUser, loggedUser }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/projects-list" render={() => <Projects loggedUser={loggedUser} />} /> 
            <Route path="/details/:project_id" render={props => <ProjectDetails {...props} />} />
            <Route path="/signup" render={props => <Signup appUser={appUser} {...props} />} />
            <Route path="/login" render={(props) => <Login appUser={appUser} {...props} />} />
            <Route path="/profile" render={() => loggedUser ? <Profile loggedUser={loggedUser}/> : <Redirect to ="/" />} />
        </Switch>
    )
}

export default Routes