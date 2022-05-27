import { generateId } from "../Utils/generateId.js"

export class Trip {
  constructor(trip) {
    this.id = generateId()
    this.name = trip.name
    this.reservations = trip.reservations
  }
}