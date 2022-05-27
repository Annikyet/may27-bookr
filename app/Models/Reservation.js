export class Reservation {
  constructor(reservation) {
    this.type = reservation.type
    this.name = reservation.name
    this.confNum = reservation.confNum
    this.address = reservation.address
    this.datetime = reservation.datetime
    this.cost = reservation.cost
  }

  get TypeIcon() {
    switch (this.type) {
      case 'flight':
        return `<i class="mdi mdi-airplane"></i>`
    }
    return ''
  }

  get Template() {
    return `
      <div class="reservation">
        <span>${this.TypeIcon}</span>
        <span>${this.name}</span>
        <span>${this.confNum}</span>
        <span>${this.address}</span>
        <span>${this.datetime}</span>
        <span>$${Math.floor(this.cost / 100)}</span>
      </div>`
  }
}