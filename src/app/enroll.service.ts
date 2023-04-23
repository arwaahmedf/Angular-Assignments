import { Injectable } from '@angular/core';
import { User } from './User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {
  _url:string="http://localhost:3000/enroll";
  constructor(private http:HttpClient) { }

  enroll(user:User)
  {
    //http call
   return this.http.post(this._url,user);
  }

  
}
