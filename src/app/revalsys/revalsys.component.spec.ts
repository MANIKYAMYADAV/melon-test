import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevalsysComponent } from './revalsys.component';

describe('RevalsysComponent', () => {
  let component: RevalsysComponent;
  let fixture: ComponentFixture<RevalsysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevalsysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevalsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
