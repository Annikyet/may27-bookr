import { ProxyState } from "../AppState.js"
import { tabsService } from "../Services/TabsService.js"

// Draw tab bar, then tab content

// Private
function _tabBarTemplate() {
  let html = `<div class="tab-bar"><div class="d-flex">`
  for (let t = 1; t < ProxyState.tabs.length; t++) {
    //refactor this line, it's too long
    html += `<div class="tab${ProxyState.currentTab === t ? " selected" : ""}" `
    html += `onclick="app.tabsController.view(${t})">${ProxyState.tabs[t].name}</div>`
  }
  html += `<div class="tab${ProxyState.currentTab === 0 ? " selected" : ""}" `
  html += `onclick="app.tabsController.view(0)">${ProxyState.tabs[0].name}</div>`
  html += `</div></div>`
  return html
}

function _draw() {
  console.log(`tabsController._draw()`)
  let html = _tabBarTemplate()
  html += ProxyState.tabs[ProxyState.currentTab].Template
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