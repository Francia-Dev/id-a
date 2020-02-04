import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadeIdComponent } from './comunidade-id.component';

describe('ComunidadeIdComponent', () => {
  let component: ComunidadeIdComponent;
  let fixture: ComponentFixture<ComunidadeIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadeIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadeIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
