import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'
import Projects from '../pages/Projects/Projects'
import ProjectDetails from '../pages/Project-details/ProjectDetails'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'
import ProjectCard from '../pages/Projects/ProjectCard'


const Routes = ({ appUser, loggedUser, users }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/projects-list" render={() => <Projects loggedUser={loggedUser} />} /> 
            <Route path="/details/:project_id" render={props => <ProjectDetails {...props} loggedUser={loggedUser} />} />{/*users={users}*/}
            <Route path="/signup" render={props => loggedUser ? <Signup appUser={appUser} {...props} /> : <Redirect to="/" />} />
            <Route path="/login" render={(props) => <Login appUser={appUser} {...props} />} />
        
    
            {/* <Route path="/edit-project/:project_id" render={props => loggedUser?.role==="ADMIN" ? <ProjectCard appUser={appUser}  {...props} /> : <Redirect to="/" />} /> */}
            {/* <Route path="/profile" render={() => loggedUser ? <Profile loggedUser={loggedUser}/> : <Redirect to ="/" />} /> */}
        </Switch>
    )
}

export default Routes