import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LighInfoComponent } from './ligh-info.component';

describe('LighInfoComponent', () => {
  let component: LighInfoComponent;
  let fixture: ComponentFixture<LighInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LighInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LighInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
