import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-loading',
  //from https://loading.io/css/ :
  template: '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
