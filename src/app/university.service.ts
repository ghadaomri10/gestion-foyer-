import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Universite } from '../models/universite.model'; 

@Injectable({
  providedIn: 'root'
})
export class UniversityService {
  private baseUrl = 'http://localhost:8080/universities'; 

  constructor(private http: HttpClient) { }

  getAllUniversities(): Observable<Universite[]> {
    return this.http.get<Universite[]>(`${this.baseUrl}/all`);
  }

  addUniversite(universite: Universite): Observable<Universite> {
    return this.http.post<Universite>(`${this.baseUrl}/add`, universite);
  }
  deleteUniversite(universityId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/${universityId}`);
  }
  updateUniversite(universite: Universite, id: number): Observable<Universite> {
    return this.http.put<Universite>(`${this.baseUrl}/update`, universite);
  }
  getUniversityById(id: number): Observable<Universite> {
    return this.http.get<Universite>(`${this.baseUrl}/${id}`);
  }
  affecterUniversiteToFoyer(idFoyer: number, nom: string): Observable<Universite> {
    const url = `${this.baseUrl}/lol/${idFoyer}/${nom}`;
    return this.http.put<Universite>(url, {}); 
  }
}
