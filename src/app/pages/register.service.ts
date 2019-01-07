import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private httpservice:HttpClient) { }

 register(formdata){
  let url='http://localhost:3000/api/users'
  return this.httpservice.post(url,formdata,{headers:this.headers} )

 }

}
