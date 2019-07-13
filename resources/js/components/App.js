import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Results from './Results'

class App extends Component {
    render () {
        return (
          <BrowserRouter>
            <Route path="/Home" component={Home} />
            <Route path="/Results" component={Results} />
          </BrowserRouter>
        )
    }
}

    

console.log('hi');
ReactDOM.render(<App />, document.getElementById('app'))

