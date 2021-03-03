import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'
import Projects from '../pages/Projects/Projects'
import ProjectDetails from '../pages/Project-details/ProjectDetails'
import Signup from '../pages/Signup/Signup'
import Login from '../pages/Login/Login'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/projects-list" render={() => <Projects />} /> 
            <Route path="/details/:project_id" render={props => <ProjectDetails {...props} />} />
            <Route path="/signup" render={() => <Signup />} />
            <Route path="/login" render={() => <Login />} />
        </Switch>
    )
}

export default Routes