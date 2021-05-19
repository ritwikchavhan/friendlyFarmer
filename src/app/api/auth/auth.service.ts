import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _http: HttpClient
  ) { }

  async register(data){
    // var headers = new Headers();

    // headers.append("Accept", "application/json");

    // headers.append("Content-Type", "application/json" );

    // let options = new RequestOptions({ headers: headers });
    console.log(data)
    return  await this._http.post(`${environment.base_url}/auth/register.php`,data);
  }

  async login(data){
    // var headers = new Headers();

    // headers.append("Accept", "application/json");

    // headers.append("Content-Type", "application/json" );

    // let options = new RequestOptions({ headers: headers });
    console.log(data)
    return await this._http.post(`${environment.base_url}/auth/login.php`,data);
  }
}
