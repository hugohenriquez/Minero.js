import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturacionTabComponent } from './facturacion-tab.component';

describe('FacturacionTabComponent', () => {
  let component: FacturacionTabComponent;
  let fixture: ComponentFixture<FacturacionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturacionTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturacionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
