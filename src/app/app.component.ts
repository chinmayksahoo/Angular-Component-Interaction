import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Component-Interaction';
  
  counter:number = 0;

  constructor(){

  }

  handleTotal(c:string){
    this.counter = parseInt(c);
    //alert(`Total Event Raised: ${c}`)
  }
}
