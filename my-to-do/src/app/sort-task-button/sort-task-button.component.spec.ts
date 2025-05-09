import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortTaskButtonComponent } from './sort-task-button.component';

describe('SortTaskButtonComponent', () => {
  let component: SortTaskButtonComponent;
  let fixture: ComponentFixture<SortTaskButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SortTaskButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SortTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
