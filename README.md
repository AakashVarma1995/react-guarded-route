# react-guarded-route 

>  

[![NPM](https://img.shields.io/npm/v/react-guarded-route.svg)](https://www.npmjs.com/package/react-guarded-route) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

react-guarded-route allows you to guard your routes by a validation fuction.
## Install

```bash
npm install --save react-guarded-route
```

## Usage

```jsx
import React, { Component } from 'react'

import GuardedRoute from 'react-guarded-route'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from './Dashboard';
import Home from './Home';

const validatorFunction = () => {
  return true; //your validation logic
}

export default function App() {
  return(
    <Router>
        <Switch>
            <Route exact path = '/' component={Home}></Route>
            <GuardedRoute 
                path = '/dashboard'
                component = {Dashboard}
                redirectTo = '/login' //(Optional) Redirect to '/login' if validatorFunction returns false. Will redirect to '/' if not provided. 
                validatorFunction = {validatorFunction()}>
        </Switch>
    </Router>
  )
}
```

## License

MIT © [](https://github.com/)
