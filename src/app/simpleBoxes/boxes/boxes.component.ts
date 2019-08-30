import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  public allowNewServer = false;
  serverCreationStatus = 'No server created';
  servers = ['server1', 'server2'];
  serverName = 'newServer';

  constructor() {
    // after given time (2 secs) parameter will change to true changing html button
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created';
    this.servers.push(this.serverName);
  }
}
