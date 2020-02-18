import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8899/api/";

  login(data)
  {
    console.log(data);
    return this.http.post(this.url+'adminLogin', data);
  }
}
