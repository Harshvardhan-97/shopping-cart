import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UloginService {

  constructor(private http: HttpClient) { }
  url="http://localhost:8899/api/";
  user(data)
  {
    console.log(data)
    return this.http.post(this.url+'user',data)
  }

  login(data)
  {
    console.log(data);
    return this.http.post(this.url+'ulogin', data);
  }
}
