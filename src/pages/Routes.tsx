import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom'
import Error404 from './error404/Error404';
import {Main} from './main/Main';
import {EmployeesContainer} from './employees/EmployeesContainer';

export const PATH = {
    MAIN: '/main',
    EMPLOYEES: '/employees',
}

export const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.MAIN}/>}/>

                <Route path={PATH.MAIN} render={() => <Main/>}/>
                <Route path={PATH.EMPLOYEES} render={() => <EmployeesContainer/>}/>

                <Route render={() => <Error404/>}/>

            </Switch>

        </div>
    );
};

