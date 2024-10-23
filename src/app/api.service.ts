import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('https://dummyapi.online/api/pokemon')
  }

  getDataById(id:any){

    return this.http.get('https://dummyapi.online/api/pokemon/'+ id)

  }

}
