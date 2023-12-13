import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { Router } from '@angular/router';
import { EtudiantService } from '../etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit{
  etudiants! : Etudiant[];
  constructor ( private router: Router,
    private etudiantService :EtudiantService){

  }
  ngOnInit()  {
    this.etudiantService.retrieveAllEtudiants().subscribe(data => {
      this.etudiants= data;
    });
}
deleteEtu(IndexEtu : number) {
  let etudiant = this.etudiants.at(IndexEtu);
  // @ts-ignore
  this.etudiantService.deleteEtudiant(etudiant).subscribe(
    () => {
      this.etudiants= this.etudiants.filter((edu)=>{ // @ts-ignore
        return etudiant.idEtudiant !== edu.idEtudiant })
    }
  );
  }

  isDeleteConfirmationVisible = false;
  etudiantToDeleteId: number | undefined;

  deleteEtudiantConfirmation(indexEtudiant: number | undefined): void {
    this.isDeleteConfirmationVisible = true;
    this.etudiantToDeleteId = indexEtudiant;
  }

 onConfirmDelete(confirmed: boolean): void {
    if (confirmed) {
      console.log('Delete confirmed');
      if (this.etudiantToDeleteId!=null) {
        let etud = this.etudiants.at(this.etudiantToDeleteId);
        // @ts-ignore
        this.etudiantService.deleteEtudiant(etud).subscribe(() => {
          this.etudiants= this.etudiants.filter((edu)=>{ // @ts-ignore
            return etud.idEtudiant !== edu.idEtudiant })
          this.closeDeleteConfirmation();
        });
      }
    } else {
      console.log('Delete canceled');
      this.closeDeleteConfirmation();
    }
  }

  closeDeleteConfirmation(): void {
    this.isDeleteConfirmationVisible = false;
    this.etudiantToDeleteId = undefined;
  }

}


