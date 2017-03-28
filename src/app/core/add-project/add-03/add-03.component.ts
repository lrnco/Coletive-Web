import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cc-add-03',
  templateUrl: './add-03.component.html'
})
export class Add03Component implements OnInit {

  description:string;
  aditionalInfo:string;
  @Output() info = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emitDescription() {
    this.info.emit({description: this.description});
  }
  emitInfo() {
    this.info.emit({aditionalInfo: this.aditionalInfo});
  }

}
