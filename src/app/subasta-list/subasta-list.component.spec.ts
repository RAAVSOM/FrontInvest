import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubastaListComponent } from './subasta-list.component';

describe('SubastaListComponent', () => {
  let component: SubastaListComponent;
  let fixture: ComponentFixture<SubastaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubastaListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubastaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
