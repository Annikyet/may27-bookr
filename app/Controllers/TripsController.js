import { ProxyState } from "../AppState.js"
import { Tab } from "../Models/Tab.js"
import { Trip } from "../Models/Trip.js"
import { tripsService } from "../Services/TripsService.js"


// Private


// Public
export class TripsController {
  constructor() {
    
  }

  add() {
    window.event.preventDefault()
    console.log('tripsController.add()')
    let form = window.event.target
    let tripData = {
      name: form.tripname.value,
      reservations: []
    }
    tripsService.add(tripData)
  }
  
  remove(id) {
    // add are you sure dialog
    console.log(`tripsController.remove(${id})`)
    tripsService.remove(id)
  }
}