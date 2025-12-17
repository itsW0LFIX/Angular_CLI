import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WxRoot } from './wx-root';

describe('WxRoot', () => {
  let component: WxRoot;
  let fixture: ComponentFixture<WxRoot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WxRoot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WxRoot);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
