import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoinventarioComponent } from './listadoinventario.component';

describe('ListadoinventarioComponent', () => {
  let component: ListadoinventarioComponent;
  let fixture: ComponentFixture<ListadoinventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoinventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoinventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
