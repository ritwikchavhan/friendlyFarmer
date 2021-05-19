import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WhetherService {

  constructor(
    private _http: HttpClient
  ) { }

  getWhether(city){
    
    return this._http.get(`http://api.weatherapi.com/v1/current.json?key=eb2bc7a9a0a14c3b8d9165534211703&q=${city}&aqi=yes`)
  }
}
