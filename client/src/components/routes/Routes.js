import { Switch, Route } from 'react-router-dom'

import IndexPage from '../pages/Index/Index'
import Projects from '../pages/Projects/Projects'

const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/projects-list" render={() => <Projects />} />
        </Switch>
    )
}

export default Routes