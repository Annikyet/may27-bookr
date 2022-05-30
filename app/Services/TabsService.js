// update tabs everytime trips are updated, putting add at the end

import { ProxyState } from "../AppState.js"

// Private
function _update() {
  for (let trip = 0; trip < ProxyState.trips.length; trip++) {
    // ProxyState.tabs.find(tab => tab.tripId === ProxyState.trips[trip].id).Template = ProxyState.trips[trip].Template
    for (let tab = 0; tab < ProxyState.tabs.length; tab++) {
      if (ProxyState.tabs[tab].tripId = ProxyState.trips[trip].id) {
        ProxyState.tabs[tab].Template = ProxyState.trips[trip].Template
      }
    }
  }
  // ProxyState.tabs = ProxyState.tabs
}

// Public
class TabsService {
  constructor() {
    ProxyState.on('trips', _update)
  }

  view(idx) {
    console.log(`tabsService.view(${idx})`)
    ProxyState.currentTab = idx
  }
}

export const tabsService = new TabsService()