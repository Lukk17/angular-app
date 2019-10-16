import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {Offer} from "../offers/offer.model";

@Injectable({providedIn: 'root'})
export class OffersService {
  bookedOfferSubject = new Subject<Offer>();
  lastBooked: Offer = new Offer("nothing booked yet", "", "");

  constructor() {
    this.bookedOfferSubject.subscribe(offer => {
      this.lastBooked = offer;
    })
  }
}
