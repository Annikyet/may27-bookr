import { ProxyState } from "../AppState.js"


class TripsService {
  constructor() {
    ProxyState.trips[0].hello()
  }
}

export const tripsService = new TripsService()