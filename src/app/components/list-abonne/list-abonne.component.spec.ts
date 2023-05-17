import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAbonneComponent } from './list-abonne.component';

describe('ListAbonneComponent', () => {
  let component: ListAbonneComponent;
  let fixture: ComponentFixture<ListAbonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAbonneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAbonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
