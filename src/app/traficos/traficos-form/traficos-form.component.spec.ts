import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraficosFormComponent } from './traficos-form.component';

describe('TraficosFormComponent', () => {
  let component: TraficosFormComponent;
  let fixture: ComponentFixture<TraficosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraficosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraficosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
