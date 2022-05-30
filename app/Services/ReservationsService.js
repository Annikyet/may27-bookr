import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js"

class ReservationsService {
  constructor() {
    
  }

  add(data) {
    console.log(`reservationsService.add(${data})`)
    for (let trip = 0; trip < ProxyState.trips.length; trip++) {
      if (ProxyState.trips[trip].id === ProxyState.tabs[ProxyState.currentTab].tripId) {
        ProxyState.trips[trip].reservations.push(new Reservation(data))
      }
    }
    ProxyState.trips = ProxyState.trips
  }

  remove(id) {
    let newReservations = ProxyState.trips[ProxyState.currentTrip].reservations.filter(r => r.id !== id)
     ProxyState.trips[ProxyState.currentTrip].reservations = newReservations
     ProxyState.trips = ProxyState.trips
  }
}

export const reservationsService = new ReservationsService()