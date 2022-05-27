import { ProxyState } from "../AppState.js"
import { tripsService } from "../Services/TripsService.js"


// Private
function _draw() {
  document.getElementById('reservations').innerHTML = ProxyState.trips[ProxyState.currentTrip].Template
}

// Public
export class TripsController {
  constructor() {
    ProxyState.on('trips', _draw)
    ProxyState.on('currentTrip', _draw)
    _draw()
  }
}