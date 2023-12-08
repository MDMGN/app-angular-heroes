import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShonenComponent } from './shonen.component';

describe('ShonenComponent', () => {
  let component: ShonenComponent;
  let fixture: ComponentFixture<ShonenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShonenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShonenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
