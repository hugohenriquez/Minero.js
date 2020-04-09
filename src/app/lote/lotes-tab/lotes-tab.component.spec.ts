import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotesTabComponent } from './lotes-tab.component';

describe('LotesTabComponent', () => {
  let component: LotesTabComponent;
  let fixture: ComponentFixture<LotesTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotesTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
