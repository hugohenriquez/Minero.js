import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraficosTabComponent } from './traficos-tab.component';

describe('TraficosTabComponent', () => {
  let component: TraficosTabComponent;
  let fixture: ComponentFixture<TraficosTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraficosTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraficosTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
