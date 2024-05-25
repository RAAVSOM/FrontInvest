import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioAdminComponent } from './negocio-admin.component';

describe('NegocioAdminComponent', () => {
  let component: NegocioAdminComponent;
  let fixture: ComponentFixture<NegocioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegocioAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NegocioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
