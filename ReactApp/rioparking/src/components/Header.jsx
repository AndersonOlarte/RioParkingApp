import React, { Component } from 'react'
import navComp from '../jsonDocs/NavBarComponents.json'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './Home'
import Registry, {Login} from './Registry'
import ReserveCell from './ReserveCell'


export default class Header extends Component {
     navItems = Object.keys(navComp).map((item) =>{
        return(<li key={navComp[item].id}>
            <img src = {navComp[item].imgAdd} alt={navComp[item].name}/>
                <Link to={`/${navComp[item].address}`}>{navComp[item].name}</Link>
            </li>)
    })
    render () {
        return (
            <>
            <Router>

                <section className = "header">
                    <img src="/Images/Logo_and_icons/logo.jpg" alt="Logo.png"/>
                    <div className="navBar">
                        <ul>
                            {this.navItems}
                        </ul>
                    </div>
                </section>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/registry">
                        <Registry/>
                    </Route>
                    <Route path="/sesion">
                        <Login/>
                    </Route>
                </Switch>
            </Router>
            </>
            )
    }
}
