import { generateId } from "../Utils/generateId.js"

export class Trip {
  constructor(trip) {
    if (trip.id) {
      this.id = trip.id
    } else {
      this.id = generateId()
    }
    this.name = trip.name
    this.reservations = trip.reservations
    if (trip.notes) {
      this.notes = trip.notes
    } else {
      this.notes = ''
    }
  }

  get TotalCost() {
    let total = 0
    for (let r = 0; r < this.reservations.length; r++) {
      total += this.reservations[r].cost
    }
    return total
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

    // let parties = ProxyState.parties.sort((a,b)=> a.date - b.date)
    let reservations = this.reservations.sort((a, b) => a.datetime - b.datetime)

    for (let i = 0; i < reservations.length; i++) {
      html += reservations[i].Template
    }
    html += `
      </div>
      <div class="reservation-legend"s>
        <span class="res-type"></span>
        <span class="res-name"</span>
        <span class="res-conf"></span>
        <span class="res-addr"></span>
        <span class="res-date"></span>
        <span class="res-cost">Total: $${Math.floor(this.TotalCost / 100)}</span>
        <span class="res-delete"></span>
      </div>`
    html += `
    <form id="new-reservation-form" onsubmit="app.reservationsController.add()">
      <div class="new-reservation-bar">
      
        <select class="reservation-input" required id="type" name="type">
          <option value="flight">🛩</option>
          <option value="rental">🚗</option>
          <option value="accomodation">🛏</option>
          <option value="attraction">🎟</option>
          <option value="other">🌊</option>
        </select>
        <input type="text" class="reservation-input" required id="name" name="name" placeholder="Name">
        <input type="text" class="reservation-input" required id="conf-num" name="confNum" placeholder="Confirmation Number">
        <input type="text" class="reservation-input" required id="address" name="address" placeholder="Address">
        <input type="date" class="reservation-input" required id="datetime" name="datetime" placeholder="Date & Time">
        <input type="number" class="reservation-input" required id="cost" name="cost" placeholder="Cost">
        <button class="reservation-button">Add</button>
      </div>
      </form>
      <form onblur="blablabla()">
        <textarea name="notes" id="notes" cols="50" rows="4">${this.notes}</textarea>
      </form>`
        // TODO change type input field to type option and use emjois for text-holder
    html += `
      <div class="modal fade" id="deleteTripModal" tabindex="-1" aria-labelledby="deleteTripModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Delete Trip?</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Are you sure you want to delete this trip?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onclick="app.tripsController.remove('${this.id}')">Delete</button>
            </div>
          </div>
        </div>
      </div>`
    return html
  }
}