import React, { Component } from 'react'
import { Switch, Route, Link} from 'react-router-dom'
import parkings from '../jsonDocs/parkingsInfo.json'
import ReserveCell from './ReserveCell'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Main extends Component{
constructor(props) {
    super(props)
}
state = {
    modal: false,
    parking: {},
}
onClick =(parkingSel, e) => {
    this.setState({
        modal:!this.state.modal,
        parking:parkingSel,
    })
}
toggle = () => {
    console.log(this.state.modal)
    this.setState({
    setModal:!this.state.modal,
    modal: !this.state.modal,
})}

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
                        <input type="button" value="Reservar"  onClick={(e)=>this.onClick(parkings[item],e)}/>
                        <input type="button" value="ver"/>
                </div>
            </div>
            )
    })
    render() {
        return(
            <section className ="mainSection">
                    {this.createItems}
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>{this.state.parking.name}</ModalHeader>
                        <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
              </Modal>
            </section>
        )
    }
}