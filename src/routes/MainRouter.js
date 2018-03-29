import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

const DashboardPage = () => (
    <div>
        <h2>Hey There! This is the dashboard!</h2>
    </div>
);

const ProfilePage = (props) => (
    <div>
        <h2>Hey There! This is your profile! Your user ID is {props.match.params.userid}</h2>
    </div>
);

const NotFoundPage = () => (
    <div>
        <h2>Uh oh, looks like you got lost somewhere!</h2>
        <p><Link to="/">Back to the Dashboard!</Link></p>
    </div>
);

const Header = () => (
    <header>
        <h1>This is my app!</h1>
    </header>
);

const MainRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={DashboardPage} exact={true} />
                <Route path="/profile/:userid" component={ProfilePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default MainRouter;