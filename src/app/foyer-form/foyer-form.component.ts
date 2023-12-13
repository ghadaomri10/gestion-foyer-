import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoyerServiceService } from '../foyer-service.service';
import { Foyer } from '../foyer';

@Component({
  selector: 'app-foyer-form',
  templateUrl: './foyer-form.component.html',
  styleUrls: ['./foyer-form.component.css']
})
export class FoyerFormComponent {

  foyer:Foyer;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private foyerService :FoyerServiceService
  ) {
    this.foyer = new Foyer();
  }
  onSubmit(){
    let foy : Foyer[] = [this.foyer]
    this.foyerService.addFoyers(foy).subscribe(result => this.goToFoyerList());

  }
  goToFoyerList(){
    this.router.navigate(['/foyers']);
  }
}
