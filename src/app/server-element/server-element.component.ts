import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent {

  // This is a property that can be referenced from a parent component
  @Input('srvElement') element: {type: string, name: string, content: string };

}
