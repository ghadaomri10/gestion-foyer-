import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityComponent } from './university/university.component';
import { BlocComponent } from './bloc/bloc.component';
import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { FoyerServiceService } from './foyer-service.service';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import { FormsModule } from '@angular/forms';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { AffecterFoyerUniComponent } from './affecter-foyer-uni/affecter-foyer-uni.component';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtudiantEditComponent } from './etudiant-edit/etudiant-edit.component';
import { OnHoverDirective } from './etudiant-list/on-hover.directive';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    FoyerListComponent,
    BlocComponent,
    UniversityComponent,
    FoyerFormComponent,
    UpdateUniversityComponent,
    AffecterFoyerUniComponent,
    EtudiantFormComponent,
    EtudiantListComponent,
    EtudiantEditComponent,
    OnHoverDirective,
    DeletePopupComponent
   
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FoyerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
