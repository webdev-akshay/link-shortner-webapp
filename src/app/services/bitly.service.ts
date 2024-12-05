import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environments } from '../envirnments/envirnments';

@Injectable({
  providedIn: 'root'
})
export class BitlyService {
  private apiUrl=environments.apiUrl;
  constructor( private http:HttpClient) { }

  private headers=new HttpHeaders({
    Authorization:`Bearer ${environments.bitlyToken}`,
    'Content-Type':'application/json'
  })
  shortenUrl(long_url:string){
    const body={long_url:long_url};
    return this.http.post(this.apiUrl,body, {headers:this.headers})
  }
}
