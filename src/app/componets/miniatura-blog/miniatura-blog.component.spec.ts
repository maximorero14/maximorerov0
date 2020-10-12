import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniaturaBlogComponent } from './miniatura-blog.component';

describe('MiniaturaBlogComponent', () => {
  let component: MiniaturaBlogComponent;
  let fixture: ComponentFixture<MiniaturaBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniaturaBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniaturaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
