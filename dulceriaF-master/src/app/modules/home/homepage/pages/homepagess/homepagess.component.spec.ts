import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepagessComponent } from './homepagess.component';

describe('HomepagessComponent', () => {
  let component: HomepagessComponent;
  let fixture: ComponentFixture<HomepagessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomepagessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepagessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
