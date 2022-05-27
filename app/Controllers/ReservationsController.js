import { reservationsService } from "../Services/ReservationsService.js";


// Private



// Public
export class ReservationsController {
  constructor() {
    reservationsService.hello()
  }
}