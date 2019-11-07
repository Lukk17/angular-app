import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css'],
  animations: [
    trigger('divState',[
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px)'
      })),
      // for bidirectional same animation:
      transition('normal <=> highlighted', animate(300)),
    ]),

    trigger('wildState',[
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken' , style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(500)),
      //using wildcard to run transition in every states
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange',
          borderRadius: '0px'
        }),
        animate(300, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ]),
    trigger('list1',[
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity:0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('* => void',animate(300, style({
          opacity:0,
          transform: 'translateX(100px)'
        }))
        )
    ]),
  ]
})
export class ExtrasComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  list = ['Milk', 'Sugar', 'Bread'];
  state = 'normal';
  wildState = 'normal';

  onAdd(item) {
    this.list.push(item);
  }

  onDelete(item: string) {
    this.list = this.list.filter(obj => obj !== item);
    console.log('delete')
  }

  onAnimate() {
    this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState == 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  animationStart(event: Event) {
    console.log('Aniiiiimmmate')
  }
}
