import { generateId } from "../Utils/generateId.js"

export class Reservation {
  constructor(reservation) {
    this.id = generateId()
    this.type = reservation.type
    this.name = reservation.name
    this.confNum = reservation.confNum
    this.address = reservation.address
    this.datetime = reservation.datetime
    this.cost = reservation.cost
  }

  get TypeIcon() {
    switch (this.type) {
      case 'flight':
        return `<i class="mdi mdi-airplane-takeoff"></i>`
    }
    return ''
  }

  get Template() {
    return `
      <div class="reservation">
        <span class="stacked-text res-type">${this.TypeIcon}</span>
        <span class="stacked-text res-name">${this.name}</span>
        <span class="stacked-text res-conf">${this.confNum}</span>
        <span class="stacked-text res-addr">${this.address}</span>
        <span class="stacked-text res-date">${this.datetime}</span>
        <span class="stacked-text res-cost">$${Math.floor(this.cost / 100)}</span>
        <span class="stacked-text res-delete"><i class="mdi mdi-delete" onclick="app.reservationsController.remove('${this.id}')"></i></span>
      </div>`
  }
}