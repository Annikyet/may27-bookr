import { generateId } from "../Utils/generateId.js"

export class Trip {
  constructor(trip) {
    this.id = generateId()
    this.name = trip.name
    this.reservations = trip.reservations
  }

  get Template() {
    let html = ''
    for (let i = 0; i < this.reservations.length; i++) {
      html += this.reservations[i].Template
    }
    return html
  }
}