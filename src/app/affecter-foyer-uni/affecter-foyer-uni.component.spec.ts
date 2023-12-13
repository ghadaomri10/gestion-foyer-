import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterFoyerUniComponent } from './affecter-foyer-uni.component';

describe('AffecterFoyerUniComponent', () => {
  let component: AffecterFoyerUniComponent;
  let fixture: ComponentFixture<AffecterFoyerUniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffecterFoyerUniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffecterFoyerUniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
