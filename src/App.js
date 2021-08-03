import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/login';
import Settings from './pages/settings';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/settings" component={ Settings } />
        <Route path="/" component={ Login } />
      </Switch>
    </BrowserRouter>

  );
}
