import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { config } from '../config';
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
  }
  
   skill_test($data:any) {
    return this.http.post(`${config.base_url}/JobMarket/skilltest/`,$data, { headers: this.headers });

  }
  create_job($data:any) {
    return this.http.post(`${config.base_url}/JobMarket/skilltest/`,$data, { headers: this.headers });

  }
}
