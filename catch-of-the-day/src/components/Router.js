import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './NotFound';
import React from 'react';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={StorePicker}/>
        <Route path="/store/:storeid" component={App}/>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
};

export default Router;
