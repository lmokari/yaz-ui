import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login-page';
import Users from './pages/users-page';
import CheckPip from './pages/check-pip-page';
import CopyTemplate from './pages/copy-templates-page';
import CopyCustomPrice from './pages/copy-custom-prices-page';


const Routes = () => {
        return(
            <Switch>
                <Route path="/"  exact component={Login} />
                <Route path="/login"  exact component={Login} />
                <Route path="/users-list"  exact component={Users} />
                <Route path="/check-pip"  exact component={CheckPip} />
                <Route path="/copy-template" exact component={CopyTemplate} />
                <Route path="/copy-custom-price" exact component={CopyCustomPrice} />

            </Switch>
        )
}

export default Routes;