import { Component, OnInit, Input } from '@angular/core';
import Insurance from '../Insurance'

@Component({
  selector: 'app-show-notes',
  templateUrl: './show-notes.component.html',
  styleUrls: ['./show-notes.component.css']
})
export class ShowNotesComponent implements OnInit {

  @Input() show:Array<Insurance> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
