import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioIdComponent } from './usuario-id.component';

describe('UsuarioIdComponent', () => {
  let component: UsuarioIdComponent;
  let fixture: ComponentFixture<UsuarioIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
