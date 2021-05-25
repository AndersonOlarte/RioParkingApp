import { createElement } from '../UtilsJs/createElement.js'

export function createParking (parking) {
  const ubication = createElement('li', {}, ['Ubicación: ' + parking.ubication])
  const price = createElement('li', {}, ['Precio: ' + parking.price + '$'])
  const characteristics = createElement('ul', { class: 'characteristics' }, [ubication, price])
  const name = createElement('p', { class: 'name' }, [parking.name])
  const main_item_description = createElement('div', { class: 'main-item-description' }, [name, characteristics])
  const img = createElement('img', { src: '../../Images/Parking_Images/Parking_1.jfif', alt: 'img', class: 'main-item-image1' }, [])
  const buttonRes = createElement('input', { type: 'button', value: 'reservar', class: 'button' }, [])
  const buttonCan = createElement('input', { type: 'button', value: 'cancelar', class: 'button' }, [])
  const item = createElement('div', { class: 'main-item' }, [img, main_item_description, buttonRes, buttonCan])
  return item
}
