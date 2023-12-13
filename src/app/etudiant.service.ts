import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Etudiant} from './etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private etudiantsUrl: string = "http://localhost:8080/etudiants/";

  constructor(private http: HttpClient) { 
  }
  public retrieveAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.etudiantsUrl+"all");
  }

  public addEtudiants(etudiant: Etudiant[]) {
    return this.http.post<Etudiant[]>(this.etudiantsUrl+"add", etudiant);
  }
  deleteEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.delete<Etudiant>(this.etudiantsUrl+etudiant.idEtudiant);
  }

  getEtudiantById(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(this.etudiantsUrl+id);
  }

  modifyEtudiant(uni: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(this.etudiantsUrl+"update",uni);
  }
}
