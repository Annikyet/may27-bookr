import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { Reservation } from "./Models/Reservation.js"
import { Trip } from "./Models/Trip.js"


class AppState extends EventEmitter {  
  currentTrip = 0

  /** @type {import('./Models/Trip').Trip[]} */
  trips = [
    new Trip({
      name: 'byedaho',
      reservations: [
        /** @type {import('./Models/Reservation').Reservation[]} */
        new Reservation({
          // enumerated value?
          type: 'flight',
          name: 'QXE2590',
          confNum: '0123456789abcdef',
          address: 'Gowen Field, Boise, ID',
          // datetime type?
          datetime: '2022-05-27T1407MST',
          cost: 33800
        })
      ]
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
