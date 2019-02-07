import {Component} from '@angular/core';

@Component({
  // selector which name <app-server></app-server> must be added to app.component.html to be showed
  selector: 'app-server',

  // selector which can be call by attribute <div app-server></div>
  // selector: '[app-server]'

  // selector which can be called by css class <div class="app-server"></div>
  // selector: '.app-servers'

  templateUrl: './server.component.html'
})
// this class name should be in declarations inside app.module.ts
export class ServerComponent {

  // type are automatically sign to value no need to specify it, but can be:
  serverId: number = 7;

  // with no type:
  serverStatus = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }

}
