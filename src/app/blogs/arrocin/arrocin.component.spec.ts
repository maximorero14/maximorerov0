import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrocinComponent } from './arrocin.component';

describe('ArrocinComponent', () => {
  let component: ArrocinComponent;
  let fixture: ComponentFixture<ArrocinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrocinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrocinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
