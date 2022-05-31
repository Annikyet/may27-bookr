import { ProxyState } from "../AppState.js"
import { Trip } from "../Models/Trip.js"
import { Tab } from "../Models/Tab.js"
import { saveState } from "../Utils/LocalStorage.js"

function _saveState() {
  saveState()
}

class TripsService {
  constructor() {
    ProxyState.on('currentTab', _saveState)
    ProxyState.on('trips', _saveState)
    ProxyState.on('tabs', _saveState)
  }
  add(tripData) {
    let newTrip = new Trip(tripData)
    ProxyState.trips.push(newTrip)
    ProxyState.tabs.push(new Tab(newTrip.name, newTrip.id))
    ProxyState.trips = ProxyState.trips
    ProxyState.currentTab = ProxyState.tabs.length - 1
  }

  remove(id) {
    console.log(`tripsService.remove(${id})`)
    ProxyState.trips = ProxyState.trips.filter(trip => trip.id !== id)
    console.log(ProxyState.trips)
    ProxyState.tabs = ProxyState.tabs.filter(tab => tab.tripId !== id)
    ProxyState.currentTab = ProxyState.tabs.length - 1
    console.log(ProxyState.tabs)
  }
}

export const tripsService = new TripsService()