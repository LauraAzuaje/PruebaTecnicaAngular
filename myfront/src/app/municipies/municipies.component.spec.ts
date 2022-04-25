import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipiesComponent } from './municipies.component';

describe('MunicipiesComponent', () => {
  let component: MunicipiesComponent;
  let fixture: ComponentFixture<MunicipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
