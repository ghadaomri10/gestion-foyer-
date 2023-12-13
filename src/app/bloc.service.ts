import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Bloc} from './bloc'; 

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private blocUrl : string ;
  private blocUrl1 : string ;


  constructor(private http:HttpClient) {
    this.blocUrl = 'http://localhost:8080/bloc/all';
    this.blocUrl1 = 'http://localhost:8080/bloc/add';
   }
   public retrieveAllBlocs(): Observable<Bloc[]> {
    return this.http.get<Bloc[]>(this.blocUrl);
  }

  public addFoyers(bloc: Bloc) {
    return this.http.post<Bloc>(this.blocUrl1, bloc);
  }
}
