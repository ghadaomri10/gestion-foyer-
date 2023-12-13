import { Component,OnInit } from '@angular/core';
import {Foyer} from '../foyer';
import {FoyerServiceService} from '../foyer-service.service';

@Component({
  selector: 'app-foyer-list',
  templateUrl: './foyer-list.component.html',
  styleUrls: ['./foyer-list.component.css']
})
export class FoyerListComponent implements OnInit {
  foyers! : Foyer[];
  constructor ( private foyerServiceService : FoyerServiceService){

  }
  ngOnInit()  {
    this.foyerServiceService.retrieveAllFoyers().subscribe(data => {
      this.foyers = data;
    });
    
  }

}
