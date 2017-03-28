import { Component, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'cc-add-02',
  templateUrl: './add-02.component.html'
})
export class Add02Component {

  lists = [ 'Backlog', 'TODO', 'Doing', 'Done', 'Publicado', 'Stories' ];
  select:number;
  @Output() selected = new EventEmitter();
  currentList:number = 0;
  listMargin:number = 66;
  listWidth:number = 280;
  listTranslation = 'translateX(82px)';

  constructor() {
     this.slidesResize(window.innerWidth);
     Observable.fromEvent(window, 'resize').subscribe((e:any) => this.slidesResize(e.currentTarget.innerWidth));
  }

  slidesResize(winWidth) {
    console.log(winWidth);
    if (winWidth <= 340) {
      this.listWidth = winWidth * 0.55;
      this.listMargin = (winWidth * 0.45) / 2;
    } else {
      this.listWidth = winWidth * 0.60;
      this.listMargin = (winWidth * 0.40) / 2;
    }
    this.listTranslation = 'translateX(' + this.listMargin + 'px)';
  }

  sendSelected(l) {
    this.select = l;
    this.selected.emit(l);
  }

  swipeList(e:any){
    if (e.direction <= 2) this.currentList = this.currentList + 1;
    else this.currentList = this.currentList - 1;
    this.translation();
  }

  translation() {
    if (this.currentList > (this.lists.length - 1) ) this.currentList = 0;
    this.listTranslation = 'translateX(' + (this.currentList * -this.listWidth + 12 + this.listMargin) + 'px)';
  }

}
