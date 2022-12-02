import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,AfterViewInit, AfterViewChecked, OnDestroy {

  // This is a property that can be referenced from a parent component
  @Input('srvElement') element: {type: string, name: string, content: string };
  @Input() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  constructor() {
    console.log("constructor called");
  }

  ngOnInit() {
    console.log('ngOnInit called');
    console.log('textcontent:' + this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges called', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called!')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!')
    
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('textcontent:' + this.header.nativeElement.textContent);
    
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');    
  }

}
