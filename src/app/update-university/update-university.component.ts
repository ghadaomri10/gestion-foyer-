import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversityService } from '../university.service'; 
import { Universite } from 'src/models/universite.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-update-university',
  templateUrl: './update-university.component.html',
  styleUrls: ['./update-university.component.css']
})
export class UpdateUniversityComponent implements OnInit {
  university: Universite = { idUniversite: 0, nomUniversite: '', adresse: '' };

  constructor(private route: ActivatedRoute,private router: Router, private universityService: UniversityService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.universityService.getUniversityById(id).subscribe(data => {
          this.university = data || { idUniversite: 0, nomUniversite: '', adresse: '' }; // Ensure data or default object
        });
      }
    });
  }

  updateUniversity(): void {
    if (this.university) {
      this.universityService.updateUniversite(this.university, this.university.idUniversite).subscribe(updated => {
        this.router.navigate(['/university']);
      }, error => {
   
      });
    }
  }
}
