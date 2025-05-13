import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskItemComponent } from './task-item.component';
import { Task } from '../Task';

describe('TaskItemComponent', () => {
  let component: TaskItemComponent;
  let fixture: ComponentFixture<TaskItemComponent>;

  const mockTask: Task = {
    id: 1,
    name: 'Test Task',
    date: '2023-01-01',
    time: '12:00',
    priority: 'Medium',
    done: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskItemComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskItemComponent);
    component = fixture.componentInstance;
    component.task = mockTask; // Initialize the input
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display task details', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain(mockTask.name);
    expect(compiled.querySelector('p:nth-of-type(1)').textContent).toContain(mockTask.date);
    expect(compiled.querySelector('p:nth-of-type(2)').textContent).toContain(mockTask.time);
  });
});