import React, { Component } from 'react'
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
                    <input type="button" value="aceptar"/>
                    <input type="button" value="ver"/>
                </div>
            </div>
            )
    })
    render() {
        return(
            <section className ="mainSection">
                {this.createItems}
            </section>)
    }
}