import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilatelyComponent } from './philately.component';

describe('PhilatelyComponent', () => {
  let component: PhilatelyComponent;
  let fixture: ComponentFixture<PhilatelyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhilatelyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilatelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
