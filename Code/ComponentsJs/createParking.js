import {createElement} from '../UtilsJs/createElement.js'


export function createParking(parking){
    let ubication = createElement('li', {}, ["Ubicación: " + parking['ubication']])
    let price = createElement('li', {}, ["Precio: "+ parking['price']+ '$'])
    let characteristics = createElement('ul', {class: 'characteristics'}, [ubication, price])
    let name = createElement('p',{class: 'name'},[parking['name']])
    let main_item_description = createElement('div', {class: 'main-item-description'}, [name, characteristics])
    let img = createElement('img', {src: '../../Images/Parking_Images/Parking_1.jfif', alt: 'img', class: 'main-item-image1'},[])
    let buttonRes = createElement('input', {type: 'button', value: 'reservar', class: 'button'},[])
    let buttonCan = createElement('input', {type: 'button', value: 'cancelar', class: 'button'},[])
    let item = createElement('div', {class: 'main-item'}, [img, main_item_description, buttonRes, buttonCan])
    return item
}