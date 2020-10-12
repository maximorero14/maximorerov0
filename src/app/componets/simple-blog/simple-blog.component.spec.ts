import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBlogComponent } from './simple-blog.component';

describe('SimpleBlogComponent', () => {
  let component: SimpleBlogComponent;
  let fixture: ComponentFixture<SimpleBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
