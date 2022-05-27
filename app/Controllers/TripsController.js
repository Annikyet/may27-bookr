import { tripsService } from "../Services/TripsService.js";


// Private


// Public
export class TripsController {
  constructor() {
    tripsService.hello()
  }
}