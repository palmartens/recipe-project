import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';

import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved  = false;

  constructor(private serversService: ServersService, 
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    // Snapshot: only fired once when de component has been loaded
    console.log(`Snapshot queryparams:`,this.route.snapshot.queryParams);
    console.log(`Snapshot fragment: ${this.route.snapshot.fragment}`);

    // subscribe to route properties, triggers on every change
    // no need to unsubscribe, angular does this for us
    this.route.queryParams.subscribe((params: Params) => { 
      this.allowEdit = params.allowEdit === '1' ? true : false;
    });

    const serverId = this.route.snapshot.params.id;

    this.server = this.serversService.getServer(serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route})
  }
  
  canDeactivate(){
    if (!this.allowEdit) {
      return true;
    } else {
      if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status)  && !this.changesSaved) {
        return confirm('Do you want to discard the changes? ')
      } else {
        return true;
      }
    }
  }
}