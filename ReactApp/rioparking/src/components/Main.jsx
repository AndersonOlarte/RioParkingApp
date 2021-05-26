import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import parkings from '../jsonDocs/parkingsInfo.json'

export default class Main extends Component{
    createItems = Object.keys(parkings).map((item)=> {
        return(
            <div key={parkings[item].name} className="contParking">
                <div className="innerContainer">
                    <img src={parkings[item].imgAdd} alt={parkings[item].name}/>
                    <p>{parkings[item].name}</p>
                    <ul>
                        <li>Ubicación: {parkings[item].ubication}</li>
                        <li>Precio: {parkings[item].price}</li>
                    </ul>
                </div>
                <div className="parkingButtons">
                    <Link to="/contacts">
                        <input type="button" value="Reservar"/>
                    </Link>
                    <Link>
                        <input type="button" value="ver"/>
                    </Link>
                </div>
            </div>
            )
    })
    render() {
        return(
            <section className ="mainSection">
                <Router>
                    {this.createItems}
                <Switch>
                    <Route path="contacs">
                        <p>hello</p>
                    </Route>
                </Switch>
                </Router>

            </section>)
    }
}