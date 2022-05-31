import { ProxyState } from "../AppState.js"
import { tabsService } from "../Services/TabsService.js"

// Draw tab bar, then tab content

// Private
function _tabBarTemplate() {
  let html = `<div class="tab-bar"><div class="d-flex justify-content-between"><div class="d-flex">`
  for (let t = 1; t < ProxyState.tabs.length; t++) {
    //refactor this line, it's too long
    html += `<div class="tab${ProxyState.currentTab === t ? " selected-tab" : ""}" `
    html += `onclick="app.tabsController.view(${t})">${ProxyState.tabs[t].name}</div>`
  }
  html += `<div class="tab${ProxyState.currentTab === 0 ? " selected-tab" : ""}" `
  html += `onclick="app.tabsController.view(0)">${ProxyState.tabs[0].name}</div></div></div>`
  if (ProxyState.currentTab > 0) {
    let currentTripId = ProxyState.tabs[ProxyState.currentTab].tripId
    html += `
      <button type="button" data-bs-toggle="modal" data-bs-target="#deleteTripModal">
        <i class="mdi mdi-close"></i>
      </button>`
    // html += `<i class="mdi mdi-close" onclick="app.tripsController.remove('${currentTripId}')"></i>`
  }
  html += `</div>`
  return html
}

function _draw() {
  console.log(`tabsController._draw()`)
  let html = _tabBarTemplate()
  html += ProxyState.tabs[ProxyState.currentTab].Template
  // console.log(html)
  document.getElementById('reservation-window').innerHTML = html
}

// Public
export class TabsController {
  constructor() {
    ProxyState.on('trips', _draw)
    ProxyState.on('currentTab', _draw)
    _draw()
  }

  view(idx) {
    console.log(`tabsController.view(${idx})`)
    tabsService.view(idx)
  }
}