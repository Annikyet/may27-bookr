import { ReservationsController } from "./Controllers/ReservationsController.js"
import { TripsController } from "./Controllers/TripsController.js"
import { TabsController } from "./Controllers/TabsController.js"

class App {
  tabsController = new TabsController()
  tripsController = new TripsController()
  reservationsController = new ReservationsController()
}

window["app"] = new App()