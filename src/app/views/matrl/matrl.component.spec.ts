import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrlComponent } from './matrl.component';

describe('MatrlComponent', () => {
  let component: MatrlComponent;
  let fixture: ComponentFixture<MatrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
