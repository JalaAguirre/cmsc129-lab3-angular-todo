import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubheaderContainerComponent } from './subheader-container.component';

describe('SubheaderContainerComponent', () => {
  let component: SubheaderContainerComponent;
  let fixture: ComponentFixture<SubheaderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubheaderContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubheaderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
