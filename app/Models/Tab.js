import { generateId } from "../Utils/generateId.js";


// Only generate the single tab, generate the bar in the controller
export class Tab {
  constructor(name, tripId, Template = '') {
    this.id = generateId()
    this.name = name
    this.tripId = tripId
    this.Template = Template
  }
}