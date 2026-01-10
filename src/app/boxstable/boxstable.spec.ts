import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxstable } from './boxstable';

describe('Boxstable', () => {
  let component: Boxstable;
  let fixture: ComponentFixture<Boxstable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boxstable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Boxstable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
