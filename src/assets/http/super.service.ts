import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperService {

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<any>  {
    return this.http.get('../assets/supers.json');
    
}
}
