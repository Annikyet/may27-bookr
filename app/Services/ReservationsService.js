import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js"

class ReservationsService {
  constructor() {
    
  }

  add(data) {
    ProxyState.trips[ProxyState.currentTrip].reservations.push(new Reservation(data))
    ProxyState.trips = ProxyState.trips
    console.log(ProxyState.trips)
  }
}

export const reservationsService = new ReservationsService()