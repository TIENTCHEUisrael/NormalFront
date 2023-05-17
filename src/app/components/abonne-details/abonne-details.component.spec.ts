import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonneDetailsComponent } from './abonne-details.component';

describe('AbonneDetailsComponent', () => {
  let component: AbonneDetailsComponent;
  let fixture: ComponentFixture<AbonneDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonneDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbonneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
