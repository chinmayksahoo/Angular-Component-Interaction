import { Component, Injectable, OnInit } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog'
import Insurance from '../Insurance'
import { InsuranceService } from '../Services/insurance.service'

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styleUrls: ['./note-input.component.css']
})

@Injectable()

export class NoteInputComponent implements OnInit {

  insurance:Insurance = new Insurance()
  insurances:Array<Insurance> = [];

  // constructor(private ser:InsuranceService, public dialog: MatDialog) {
  constructor(private ser:InsuranceService) {
    this.ser.getInsurance().subscribe(item=>{
      this.insurances = item
    },error=>console.error(error)
    );
  }

  ngOnInit(): void {
  }

  addNote(){
    this.ser.addInsurance(this.insurance).subscribe(
      item=>{console.log(item)},
      error=>{console.log(error)}
    );
    this.insurances.push(this.insurance)
    this.insurance = new Insurance()
  }

  resetForm(){
    this.insurance = new Insurance()
  }

}
