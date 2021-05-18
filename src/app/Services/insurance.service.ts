import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import Insurance from '../Insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

  constructor(private client:HttpClient) { 

  }
  Addnum(num1:number, num2:number):number{
    return num1 + num2
  }
  getInsurance():Observable<Array<Insurance>>{
    return this.client.get<Array<Insurance>>("http://localhost:3000/insurance")
  }
  addInsurance(ins:Insurance):Observable<Insurance>{
    return this.client.post<Insurance>("http://localhost:3000/insurance",ins)
  }
}
