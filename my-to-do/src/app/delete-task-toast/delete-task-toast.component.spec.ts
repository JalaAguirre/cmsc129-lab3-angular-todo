import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTaskToastComponent } from './delete-task-toast.component';

describe('DeleteTaskToastComponent', () => {
  let component: DeleteTaskToastComponent;
  let fixture: ComponentFixture<DeleteTaskToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteTaskToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTaskToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
