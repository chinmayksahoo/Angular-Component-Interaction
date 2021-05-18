import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //Parent-Child Interaction(app.component -> header)
  @Input() title:string='';

  //Child-Parent Interaction(app.component -> header)
  counter:number = 0
  @Output() total = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clickCount(){
    this.counter++
    this.total.emit(this.counter);
  }

}
