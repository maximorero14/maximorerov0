import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrocinGameComponent } from './arrocin-game.component';

describe('ArrocinGameComponent', () => {
  let component: ArrocinGameComponent;
  let fixture: ComponentFixture<ArrocinGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrocinGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrocinGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
