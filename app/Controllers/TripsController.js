import { ProxyState } from "../AppState.js"
import { tripsService } from "../Services/TripsService.js"


// Private
function _tabTemplate(type = 'trip') {
  let html = `
    <div class="tab-bar">
      <div class="d-flex">`
  for (let t = 0; t < ProxyState.trips.length; t++) {
    //refactor this line, it's too long
    html += `<div class="tab${ProxyState.currentTrip === t && type === 'trip' ? " selected" : ""}" onclick="app.tripsController.view('${ProxyState.trips[t].id}')">${ProxyState.trips[t].name}</div>`
  }
  html += `
    <div class="tab add-trip ${type === 'add' ? ' selected"' : '" onclick="app.tripsController.create()"'}>+</div>
      </div>
    </div>`
  return html
}

function _legendTemplate() {
  return `
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
}

function _newReservationTemplate() {
  return `
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
}

function _draw(type = 'trip') {
  let html = ''
  html += _tabTemplate(type)
  if (type === 'trip') {
    html += _legendTemplate()
    html += ProxyState.trips[ProxyState.currentTrip]
    html += _newReservationTemplate()
  } else if (type === 'add') {
    html += '*insert add trip form here*'
  }
  document.getElementById('reservation-window').innerHTML = html
}

// Public
export class TripsController {
  constructor() {
    ProxyState.on('trips', _draw)
    ProxyState.on('currentTrip', _draw)
    _draw()
  }

  create() {
    _draw('add')
  }
  
  remove(id) {
    console.log('remove trip :' + id)
  }
}