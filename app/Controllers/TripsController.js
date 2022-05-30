import { ProxyState } from "../AppState.js"
import { Tab } from "../Models/Tab.js"
import { Trip } from "../Models/Trip.js"
import { tripsService } from "../Services/TripsService.js"


// Private


// Public
export class TripsController {
  constructor() {
    
  }

  create() {
    ProxyState.trips.push(new Trip({name: 'meow', reservations: []}))
    ProxyState.tabs.push(new Tab('meow', ProxyState.trips[ProxyState.trips.length - 1].id))
    ProxyState.trips = ProxyState.trips
    ProxyState.currentTab = ProxyState.tabs.length - 1
  }
  
  remove(id) {
    
  }
}