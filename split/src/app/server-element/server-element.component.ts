import { Component, OnInit, Input, ViewEncapsulation, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;

  constructor() {
    console.log("Constructor called!");
  }

  ngOnInit(): void {
    console.log("ngOnIt called");
    console.log("Text content: " + this.header.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnchanges called");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("ngDoCheck called");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit called");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked calledl");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit called");
    console.log("Text content: " + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called");
  }

}
