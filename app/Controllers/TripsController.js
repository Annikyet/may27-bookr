import { ProxyState } from "../AppState.js"
import { tripsService } from "../Services/TripsService.js"


// Private
function _tabTemplate() {
  html = `
    <div class="tab-bar">
      <div class="d-flex">`
  for (let t = 0; t < ProxyState.trips.length; t++) {
    html += `div class="tab${currentTrip === t ? " selected" : ""}">${ProxyState.trips[t].name}</div>`
  }
  html += `
    <div class="tab add-trip" onclick="app.tripsController.create()">+</div>
      </div>
    </div>`
  return html
}

function _draw() {

  let example = `
    <div class="tab-bar">
      <div class="d-flex">
        <!-- <div class="tab tab-left"><</div> -->
        <div class="tab">trip</div>
        <div class="tab selected-tab">trip</div>
        <div class="tab">trip</div>
        <div class="tab">trip</div>
        <div class="tab add-trip" onclick="app.tripsController.create()">+</div>
      </div>
      <!-- <div class="tab tab-right">></div> -->
    </div>

    <div class="reservation-legend">
      <span class="res-tag res-type">Type</span>
      <span class="res-tag res-name">Name</span>
      <span class="res-tag res-conf">Confirmation Number</span>
      <span class="res-tag res-addr">Address</span>
      <span class="res-tag res-date">Date & Time</span>
      <span class="res-tag res-cost">Cost</span>
      <span class="res-tag res-delete"></span>
    </div>
    <div class="reservations" id="reservations"></div>

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

  document.getElementById('reservations').innerHTML = ProxyState.trips[ProxyState.currentTrip].Template
}

// Public
export class TripsController {
  constructor() {
    ProxyState.on('trips', _draw)
    ProxyState.on('currentTrip', _draw)
    _draw()
  }

  create() {

  }
  
  remove(id) {
    console.log('remove trip :' + id)
  }
}