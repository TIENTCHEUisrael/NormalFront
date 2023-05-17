import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAbonneComponent } from './create-abonne.component';

describe('CreateAbonneComponent', () => {
  let component: CreateAbonneComponent;
  let fixture: ComponentFixture<CreateAbonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAbonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
