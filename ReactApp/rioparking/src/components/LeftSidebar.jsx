import React, { Component } from 'react'

export default class RightSidebar extends Component {
    render () {
        return (
            <section className="leftSidebar">
                <form>
                    <label >Ubicación </label>
                    <select>
                        <option value="1">Centro</option>
                        <option value="2">Oriente</option>
                        <option value="3">Norte</option>
                        <option value="4">Occidente</option>
                        <option value="5">Sur</option>
                    </select>
                    <label>Precio</label>
                    <input type="number" placeholder="min"/>
                    <input type="number" placeholder="max"/>
                    <div className="radioOption">
                        <input type="checkbox" />
                        <label>Lavado</label>
                    </div>
                    <div className="radioOption">
                        <input type="checkbox" />
                        <label>Locker</label>
                    </div>
                    <div className="imgContainer">
                        <img src="/Images/Logo_and_icons/Bike.png" alt="byke"/>
                    </div>
                    <div className="imgContainer">
                        <img src="/Images/Logo_and_icons/car.png" alt="car"/>
                    </div>
                </form>
            </section>
        )
    }
}