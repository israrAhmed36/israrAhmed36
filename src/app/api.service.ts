import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getUsers(){
 return this.http.get('https://reqres.in/api/users?page=2');
  }

  getUserDetail(id){
    return this.http.get('https://reqres.in/api/users/'+id);
     }
}
