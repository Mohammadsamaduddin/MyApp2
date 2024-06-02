import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateABusComponent } from './create-a-bus.component';

describe('CreateABusComponent', () => {
  let component: CreateABusComponent;
  let fixture: ComponentFixture<CreateABusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateABusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateABusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
