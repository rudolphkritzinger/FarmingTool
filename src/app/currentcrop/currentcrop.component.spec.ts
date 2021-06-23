import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentcropComponent } from './currentcrop.component';

describe('CurrentcropComponent', () => {
  let component: CurrentcropComponent;
  let fixture: ComponentFixture<CurrentcropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentcropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentcropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
