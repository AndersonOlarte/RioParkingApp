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
                        <input type="radio" />
                        <label>Lavado</label>
                    </div>
                    <div className="radioOption">
                        <input type="radio" />
                        <label>Locker</label>
                    </div>
                    <img src="/Images/Logo_and_icons/Bike.png" alt="byke"/>
                    <img src="/Images/Logo_and_icons/car.png" alt="car"/>
                </form>
            </section>
        )
    }
}