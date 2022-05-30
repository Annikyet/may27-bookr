import { generateId } from "../Utils/generateId.js"

export class Trip {
  constructor(trip) {
    this.id = generateId()
    this.name = trip.name
    this.reservations = trip.reservations
  }

  get Template() {
    let html = `
    <div class="reservation-legend">
      <span class="res-tag res-type">Type</span>
      <span class="res-tag res-name">Name</span>
      <span class="res-tag res-conf">Confirmation Number</span>
      <span class="res-tag res-addr">Address</span>
      <span class="res-tag res-date">Date & Time</span>
      <span class="res-tag res-cost">Cost</span>
      <span class="res-tag res-delete"></span>
    </div>
    <div class="reservations">`
    for (let i = 0; i < this.reservations.length; i++) {
      html += this.reservations[i].Template
    }
    html += `
    </div>
    <form id="new-reservation-form" onsubmit="app.reservationsController.add()">
      <div class="new-reservation-bar">
        <input type="text" class="reservation-input" id="type" name="type" placeholder="Type">
        <input type="text" class="reservation-input" id="name" name="name" placeholder="Name">
        <input type="text" class="reservation-input" id="conf-num" name="confNum" placeholder="Confirmation Number">
        <input type="text" class="reservation-input" id="address" name="address" placeholder="Address">
        <input type="text" class="reservation-input" id="datetime" name="datetime" placeholder="Date & Time">
        <input type="text" class="reservation-input" id="cost" name="cost" placeholder="Cost">
        <button class="reservation-button">Add Reservation</button>
      </div>
      <textarea name="" id="" cols="50" rows="4"></textarea>
    </form>`
    return html
  }
}