import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseServizioDati } from '../entita/response-servizio-dati';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private ENDPOINT:string = 'https://randomuser.me/api';


  constructor(private http: HttpClient) { }



  ottieniDatiPortfolio():Observable<any> {
    return this.http.get(this.ENDPOINT).pipe(map((arrayUtenti:ResponseServizioDati)=>{ return arrayUtenti.results[0] }));
  }

  ottieniDati(): Observable<number>{
    return of(2,3,4);
  }

}
