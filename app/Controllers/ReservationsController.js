import { ProxyState } from "../AppState.js"
import { reservationsService } from "../Services/ReservationsService.js"


// Private


// Public
export class ReservationsController {
  constructor() {
  }

  add() {
    window.event.preventDefault()
    console.log('reservationsController.add()')
    let form = window.event.target
    let reservationData = {
      type: form.type.value,
      name: form.name.value,
      confNum: form.confNum.value,
      address: form.address.value,
      datetime: form.datetime.value,
      cost: Math.floor(form.cost.value * 100)
    }
    reservationsService.add(reservationData)
  }

  remove(id) {
    if (window.confirm("Do you want to remove this reservation?")){
      reservationsService.remove(id)
    }
  }
}