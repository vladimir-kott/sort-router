import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import Users from "./components/users"
import NavBar from './components/navBar'
import Main from './components/main'
import Login from './components/login'
import NotFound from './components/not-found'


function App() {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/login' component={Login}/>
                <Route path='/users' component={Users}/>
                <Route path='/404' component={NotFound}/>
                <Redirect to="/404"/>
            </Switch>
        </div>
    );
}

export default App;