import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // Snapshot: only fired once when de component has been loaded
    console.log(`Snapshot queryparams:`,this.route.snapshot.queryParams);
    console.log(`Snapshot fragment: ${this.route.snapshot.fragment}`);

    // subscribe to route properties, triggers on every change
    // no need to unsubscribe, angular does this for us
    this.route.queryParams.subscribe((data) => { console.log('queryParams change',data) });
    this.route.fragment.subscribe((data) => { console.log('fragment change',data) });

    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
