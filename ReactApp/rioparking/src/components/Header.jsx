import React, { Component } from 'react'
import navComp from '../jsonDocs/NavBarComponents.json'

export default class Header extends Component {
     navItems = Object.keys(navComp).map((item) =>{
        return(<li key={navComp[item].id}>
            <img src = {navComp[item].imgAdd} alt={navComp[item].name}/>
                <span>
                {navComp[item].name}
                </span>
            </li>)
    })
    render () {
        return (
            <section className = "header">
                <img src="/Images/Logo_and_icons/logo.jpg" alt="Logo.png"/>
                <div className="navBar">
                    <ul>
                    {this.navItems}
                    </ul>
                </div>
            </section>
            )
    }
}
