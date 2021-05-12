import {createParking} from '../ComponentsJs/createParking.js'
import { addChild } from '../UtilsJs/createElement.js'

var parking = {
    name: 'aeroparking',
    price: 2000,
    ubication: 'center'
}
var itemsContainer = document.getElementById('list')
addChild(itemsContainer, [createParking(parking)])