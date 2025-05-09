import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTaskButtonComponent } from './add-task-button.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AddTaskButtonComponent', () => {
  let component: AddTaskButtonComponent;
  let fixture: ComponentFixture<AddTaskButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskButtonComponent, MatDialogModule, NoopAnimationsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open dialog when clicked', () => {
    spyOn(component, 'openDialog');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.openDialog).toHaveBeenCalled();
  });
});