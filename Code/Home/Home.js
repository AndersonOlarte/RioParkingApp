import { createParking } from '../ComponentsJs/createParking.js'
import { addChild } from '../UtilsJs/createElement.js'

const parking = {
  name: 'aeroparking',
  price: 2000,
  ubication: 'center'
}
const itemsContainer = document.getElementById('list')
addChild(itemsContainer, [createParking(parking)])
