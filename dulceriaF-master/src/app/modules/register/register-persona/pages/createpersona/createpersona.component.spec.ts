import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepersonaComponent } from './createpersona.component';

describe('CreatepersonaComponent', () => {
  let component: CreatepersonaComponent;
  let fixture: ComponentFixture<CreatepersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepersonaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatepersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
