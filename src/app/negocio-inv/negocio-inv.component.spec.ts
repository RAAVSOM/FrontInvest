import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegocioInvComponent } from './negocio-inv.component';

describe('NegocioInvComponent', () => {
  let component: NegocioInvComponent;
  let fixture: ComponentFixture<NegocioInvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NegocioInvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NegocioInvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
