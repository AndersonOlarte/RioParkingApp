/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ReserveCell extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            modal: this.props.modalWindow,
            setModal: this.props.modalWindow,
        }
    }
    toggle = () => {
        console.log(this.state.modal)
        this.setState({
        setModal:!this.state.modal,
        modal: !this.state.modal,
    })
    }
    render () {
        return (
            <div>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          );
    }
}
// import React, { Component } from 'react'
// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css'


// export default class ReserveCell extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             value: new Date(),
//         }
//         this.onClickDay = this.onClickDay.bind(this)
//     }
//     onClickDay(value, e) {
//         alert('La fecha es ${value}')
//     }
//     renderCalendar () {
//         return ( <Calendar value = {this.state.value} onClickDay = {this.onClickDay}></Calendar>)
//     } 
 

//     render () {
//         return (
//             <div class="grid-container">

//                 <h1>Realizar reserva en parqueadero 6</h1>
                
//                 <div class="calendarr">
//                     <h2>Seleccione la fecha de su reserva</h2>
                    
//                     <div class="calendar-wrapper">
                        
//                         <div class="october">
//                             <h2 class="selector">
//                                 </h2>
//                                    <h2 class="month">October 2017</h2>
//                                    <h2 class="selector"></h2>

//                         </div>

//                         <ol class="days">
//                             <li class="day-name">Su</li>
//                             <li class="day-name">Mo</li>
//                             <li class="day-name">Tu</li>
//                             <li class="day-name">We</li>
//                             <li class="day-name">Th</li>
//                             <li class="day-name">Fr</li>
//                             <li class="day-name">Sa</li>
//                         </ol>

//                         <ol class="calendar">
                            
//                             <li class="first-day day">1</li>

//                             <li class="day">2</li>
//                             <li class="day">3</li>
//                             <li class="day">4</li>
//                             <li class="day">5</li>
//                             <li class="day">6</li>
//                             <li class="day">7</li>
//                             <li class="day">8</li>
//                             <li class="day">9</li>
//                             <li class="day">10</li>
//                             <li class="day">11</li>
//                             <li class="day">12</li>
//                             <li class="day">13</li>
//                             <li class="day">14</li>
//                             <li class="day">15</li>
//                             <li class="day">16</li>
//                             <li class="day">17</li>
//                             <li class="day">18</li>
//                             <li class="day">19</li>
//                             <li class="day">20</li>
//                             <li class="day">21</li>
//                             <li class="day">22</li>
//                             <li class="day">23</li>
//                             <li class="active-day">24</li>
//                             <li class="day">25</li>
//                             <li class="day">26</li>
//                             <li class="day">27</li>
//                             <li class="day">28</li>
//                             <li class="day">29</li>
//                             <li class="day">30</li>
//                             <li class="day">31</li>

//                         </ol>

//                     </div>

//                 </div>


//                 <img src="..\..\Images\ChooseCell\img_carro.jpg" alt="Imagen Carro"/>

//                 <h2 class="time"> Hora </h2>
//                 <h2 class="since">Desde:</h2>
//                 <form action="" class="form_time">
//                     <label for="Opciones"></label>
//                     <select id="hora" name="hora">
//                         <option value="Empty">Selecciona una hora</option>
//                         <option value="8AM">8:00 AM</option>
//                         <option value="10AM">10:00 AM</option>
//                         <option value="12PM">12:00 PM</option>
//                         <option value="2PM">2:00 PM</option>
//                     </select>
//                 </form>
//                 <h2 class="until">Hasta:</h2>
//                 <form action="" class="form_time2">
//                     <label for="Opciones"></label>
//                     <select id="hora" name="hora">
//                         <option value="Empty">Selecciona una hora</option>
//                         <option value="8AM">10:00 AM</option>
//                         <option value="10AM">12:00 PM</option>
//                         <option value="12PM">2:00 PM</option>
//                         <option value="2PM">4:00 PM</option>
//                     </select>
//                 </form>

//                 <h2 class="services"> Servicios adicionales a adquirir </h2>
//                 <form class="form_services">
//                     <label class="radio-inline">
//                         <input type="radio" name="servicio1"/>Servicio de lavado
//                     </label>
//                     <label class="radio-inline">
//                         <input type="radio" name="servicio2"/>Servicio de brillado
//                     </label>
//                     <label class="radio-inline">
//                         <input type="radio" name="servicio3"/>Servicio de elección de celda a su preferencia
//                     </label>
//                 </form>

//                 <button type="button" onclick="alert('Servicios elegidos con éxito')" class="btn_elegir">Elegir</button>
//                 <button type="button" onclick="alert('Reserva realizada con éxito')" class="btn_reservar">Reservar</button>
            
//             </div>
            

//         )
//     }

// }




// export default ReserveCell;

