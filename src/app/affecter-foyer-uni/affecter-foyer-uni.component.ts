import { Component } from '@angular/core';
import { UniversityService } from '../university.service';  
import { Universite } from 'src/models/universite.model';

@Component({
  selector: 'app-affecter-foyer-uni',
  templateUrl: './affecter-foyer-uni.component.html',
  styleUrls: ['./affecter-foyer-uni.component.css']
})
export class AffecterFoyerUniComponent {
  idFoyer: number | undefined;
  nomUniversity: string | undefined;

  constructor(private universityService: UniversityService) {}
  affectUniversityToFoyer(): void {
    if (this.idFoyer !== undefined && this.nomUniversity !== undefined) {
      this.universityService.affecterUniversiteToFoyer(this.idFoyer, this.nomUniversity).subscribe(
        (result: Universite) => {
          console.log('University affected to foyer:', result);
    
        },
        (error: any) => {
          console.error('Error affecting university to foyer:', error);
       
        }
      );
    } else {
      console.warn('Please enter both ID Foyer and University Name.');
    }
  }

}
