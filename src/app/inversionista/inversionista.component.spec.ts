import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InversionistaComponent } from './inversionista.component';

describe('InversionistaComponent', () => {
  let component: InversionistaComponent;
  let fixture: ComponentFixture<InversionistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InversionistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InversionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
