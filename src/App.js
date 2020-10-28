import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./App.css";
import Home from './components/pages/Home'
import Signup from './components/pages/Join/Signup'
import Discover from './components/pages/Discover'

function App() {
    return (
        <>

            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/discover" exact component={Discover} />
            </Switch>

        </>
    )
}

export default App



