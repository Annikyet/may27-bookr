import { ProxyState } from "../AppState.js"
import { Reservation } from "../Models/Reservation.js"
import { Tab } from "../Models/Tab.js"
import { Trip } from "../Models/Trip.js"


export function saveState() {
  console.log('saveState()')
  let state = {
    currentTab: ProxyState.currentTab,
    trips: ProxyState.trips
  }
  window.localStorage.setItem('bookr', JSON.stringify(state))
}

export function loadState() {
  console.log('loadState()')
  let state = window.localStorage.getItem('bookr')
  if (state) {
    state = JSON.parse(state)
    let reservations = []
    let tripName = ''
    let tripId = ''
    let tripTemplate = ''
    for (let t = 0; t < state.trips.length; t++) {
      for (let r = 0; r < state.trips[t].reservations.length; r++) {
        reservations.push(new Reservation(state.trips[t].reservations[r]))
      }
      ProxyState.trips.push(new Trip({
        id: state.trips[t].id,
        name: state.trips[t].name,
        reservations: reservations
      }))
      reservations = []
      tripName = ProxyState.trips[ProxyState.trips.length - 1].name
      tripId = ProxyState.trips[ProxyState.trips.length - 1].id
      tripTemplate = ProxyState.trips[ProxyState.trips.length - 1].Template

      ProxyState.tabs.push(new Tab(tripName, tripId, tripTemplate))
    }
    ProxyState.trips = ProxyState.trips
    ProxyState.currentTab = state.currentTab
  }
}