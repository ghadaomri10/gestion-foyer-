import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css']
})
export class EtudiantFormComponent {

  etudiant:Etudiant;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private etudiantService :EtudiantService
  ) {
    this.etudiant = new Etudiant();
  }
  onSubmit(){
    let etud : Etudiant[] = [this.etudiant]
    this.etudiantService.addEtudiants(etud).subscribe(result => this.goToEtudiantList());

  }
  goToEtudiantList(){
    this.router.navigate(['/etudiants']);
  }
}
