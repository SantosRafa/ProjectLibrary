import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import BookList from './pages/BooksList';
import BookDetails from './pages/BookDetails'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/books' exact component={BookList} />
                <Route path='/bookDetail' exact component={BookDetails} />
            </Switch>
        </BrowserRouter>
    );
}