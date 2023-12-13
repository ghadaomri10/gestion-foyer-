import { Component, OnInit, } from '@angular/core';
import { UniversityService } from '../university.service'; // Update the path
import { Universite } from 'src/models/universite.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  universities: any[] = []; // Update the type based on your Universite model

  constructor(private router: Router,private universityService: UniversityService) { }

  ngOnInit(): void {
    this.getUniversities();
  }

  getUniversities() {
    this.universityService.getAllUniversities().subscribe(
      (data: any[]) => {
        this.universities = data;
      },
      (error) => {
        console.log(error);

      }
      
    );
  }
  addUniversity(universityData: any) { // Adjust the type based on your form data structure
    this.universityService.addUniversite(universityData).subscribe(
      (data: any) => {
        console.log('University added:', data);
        // Optionally, you can update the UI or perform additional actions after adding the university
        this.getUniversities(); // Refresh the list of universities after addition
      },
      (error) => {
        console.log(error);
        // Handle error scenarios
      }
    );
  }
  deleteUniversity(universityId: number) {
    this.universityService.deleteUniversite(universityId).subscribe(
      () => {
        console.log('University deleted');
        // Optionally, update the UI or perform additional actions after deletion
        this.getUniversities(); // Refresh the list of universities after deletion
      },
      (error) => {
        console.log(error);
        // Handle error scenarios
      }
    );
  }
  updateUniversity(university: Universite): void {
    const universityId = university.idUniversite;
    this.router.navigate(['/update-university', universityId]);
  }
}