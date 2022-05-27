import { ProxyState } from "../AppState.js"
import { reservationsService } from "../Services/ReservationsService.js"


// Private
function _draw() {
  let html = ''
  for (let i = 0; i < ProxyState.trips[0].reservations.length; i++) {
    html += ProxyState.trips[0].reservations[i].Template
  }
  document.getElementById('reservations').innerHTML = html
}


// Public
export class ReservationsController {
  constructor() {
    _draw()
  }
}