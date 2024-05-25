import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioEmpComponent } from './negocio-emp.component';

describe('NegocioEmpComponent', () => {
  let component: NegocioEmpComponent;
  let fixture: ComponentFixture<NegocioEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegocioEmpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NegocioEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
