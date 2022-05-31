import { ProxyState } from "../AppState.js"


export function saveState() {
  console.log('saveState()')
  let state = {
    currentTab: ProxyState.currentTab,
    tabs: ProxyState.tabs,
    trips: ProxyState.trips
  }
  window.localStorage.setItem('bookr', JSON.stringify(state))
}