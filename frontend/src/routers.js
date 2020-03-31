import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Client from './pages/Client';
import NewNote from './pages/NewNote';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon} />
                <Route path='/register' component={Register} />
                <Route path='/client' component={Client} />
                <Route path='/notes/new' component={NewNote} />
            </Switch>        
        </BrowserRouter>
    )
}