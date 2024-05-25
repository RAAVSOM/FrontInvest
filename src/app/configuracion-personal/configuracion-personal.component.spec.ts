import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionPersonalComponent } from './configuracion-personal.component';

describe('ConfiguracionPersonalComponent', () => {
  let component: ConfiguracionPersonalComponent;
  let fixture: ComponentFixture<ConfiguracionPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfiguracionPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfiguracionPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
