import React, { Component } from 'react'
import parkings from '../jsonDocs/parkingsInfo.json'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

export default class Main extends Component{
constructor(props) {
    super(props)
}
state = {
    modal: false,
    parking: {},
    departureTime:"",
    entryTime:"",
    dataSel: new Date(),
    infoReservation: "Elige un día y un rango de hora para reservar el parqueadero"
}
onClickButton =(parkingSel, e) => {
    this.setState({
        modal:!this.state.modal,
        parking:parkingSel,
    })
}
toggle = (e) => {
    if(e.target.value ==="reservar") {
        alert("la reserva ha sido hecha con exito!")}
    this.setState({
    setModal:!this.state.modal,
    modal: !this.state.modal,
})}
onClickDay = (value, e) => {
    this.setState({
        dataSel:value,
    })
    this.createInfo()
}
createInfo = () => {
    this.setState({
        infoReservation:`su reserva será el ${this.state.dataSel.getDate()}-${this.state.dataSel.getMonth()+1} desde la(s) ${this.state.entryTime} hasta la(s) ${this.state.departureTime} `
    })
}
onChange =(e)=>{
    if(e.target.name ==="entryTime"){
        this.setState({
            entryTime:e.target.value,
        })
    }
    else{
        this.setState({
            departureTime:e.target.value,
        })
    }
    this.createInfo()
}
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
                        {/* <input type="button" value="Reservar"  onClick={this.onClick}/> */}
                        <input type="button" value="Reservar"  onClick={(e)=>this.onClickButton(parkings[item],e)}/>
                        <input type="button" value="ver"/>
                </div>
            </div>
            )
    })

    render() {
        return(
            <section className ="mainSection">
                    {this.createItems}
                    <Modal contentClassName="custom-modal-style" isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}><h1>{this.state.parking.name}</h1></ModalHeader>
                        <ModalBody>
                            <div className="calendarContainer">
                                <h2>Seleccione la fecha de reserva</h2>
                                <Calendar value ={new Date()} onClickDay={this.onClickDay} className="calendar" />
                                <div className="inputTime">
                                    <input type="text" onChange= {this.onChange} name="entryTime" placeholder="hora de entrada"/>
                                    <input type="text" onChange= {this.onChange} name="departureTime" placeholder="hora de salida"/>
                                </div>
                            </div>
                            <div className="modalRigthSide">
                                <div className="imgModalContainer">
                                    <img src={this.state.parking.imgAdd} alt="parking"/>
                                </div>
                                <div className="modalInputsField">
                                    <div><input type="checkbox" /><p>Lavado</p></div>
                                    <div><input type="checkbox" /><p>Brillado</p></div>
                                    <div><input type="checkbox" /><p>Servicio de transporte </p></div>
                                </div>
                            </div>
                        </ModalBody>
                    <ModalFooter>
                        <p>{this.state.infoReservation}</p>
                        <Button color="primary" onClick={this.toggle} value="reservar">Reservar</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                    </ModalFooter>
              </Modal>
            </section>
        )
    }
}
