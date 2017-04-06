import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'cc-add-04',
  templateUrl: './add-04.component.html',
  styleUrls: ['./add-04.component.scss']
})
export class Add04Component implements OnInit {

  link:string = "http://coletive.me/2g6";

  constructor(public snackBar: MdSnackBar) { }

  copyClipboard() {
    this.snackBar.open('Link copiado!', null, { duration: 2000,});
  }

  ngOnInit() {
  }

}
