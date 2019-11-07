import {Component, OnDestroy, OnInit} from '@angular/core';
import {Offer} from "../offer.model";
import {ActivatedRoute, Params} from "@angular/router";
import {OffersService} from "../../services/offers.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-offer-detail',
  templateUrl: './offer-detail.component.html',
  styleUrls: ['./offer-detail.component.css'],
})
export class OfferDetailComponent implements OnInit, OnDestroy {
  offer: Offer;
  private sub: Subscription;

  constructor(private route: ActivatedRoute, private offersService: OffersService) {
    console.log("constructor")
  }

  ngOnInit() {

    //  first time when this page is initialized it subscribe after booked offer was pushed
    //  so it can't received it - that's why service is remembering last pushed offer and it can be accessed here
    this.offer = this.offersService.lastBooked;

    this.sub = this.offersService.bookedOfferSubject.subscribe(offer => {
      this.offer = offer;
      console.log("booked room received")
    });

    //  subscribe to live change values when clicking on different elements
    this.route.params.subscribe((params: Params) => {
      // this.offer.name = params['name'];
      // this.offer.description = params['desc'];
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
