import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Foyer} from './foyer';

@Injectable()
export class FoyerServiceService {

  
  private foyersUrl: string;

  private foyersUrl1: string;


  constructor(private http: HttpClient) {
    this.foyersUrl = 'http://localhost:8080/foyers/all';
    this.foyersUrl1 = 'http://localhost:8080/foyers/add';
  }
  public retrieveAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(this.foyersUrl);
  }

  public addFoyers(foyer: Foyer[]) {
    return this.http.post<Foyer[]>(this.foyersUrl1, foyer);
  }
}
