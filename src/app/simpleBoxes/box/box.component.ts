import {Component, Input} from '@angular/core';

@Component({
  // selector which name <app-server></app-server> must be added to app.component.html to be showed
  selector: 'app-server',
  templateUrl: './box.component.html',
  styles: [
      `.online {
          color: greenyellow;
      }`
  ]

  // selector which can be call by attribute <div app-server></div>
  // selector: '[app-server]'

  // selector which can be called by css class <div class="app-server"></div>
  // selector: '.app-servers'
})

// this class name should be in declarations inside app.module.ts
export class BoxComponent {

  // type are automatically sign to value no need to specify it, but can be:
  serverId: number = (Math.random() * 10);
  // with no type:
  serverStatus;

  // input used in .html files, for example:
  //  <app-server [serverName]="'server'"></app-server>
  @Input() serverName: string;

  constructor() {
    this.serverStatus = Math.random() >= 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    if (this.serverStatus == 'online') return 'green';
    else return 'red';
  }
}
