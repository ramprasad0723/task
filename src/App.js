import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Appbar from './component/Appbar'
import  Login from './login/login'
class App extends Component {
    render() {
        return (
               <Router>
            <div className = "App" >
           
            <Route path="/" exact component={Login}/>
            <Route path="/appbar" component={Appbar}/>

            </div>
            </Router>
        )
    }
}

export default App