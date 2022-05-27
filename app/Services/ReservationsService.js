import { ProxyState } from "../AppState.js"

class ReservationsService {
  constructor() {
    ProxyState.reservations[0].hello()
  }
}

export const reservationsService = new ReservationsService()