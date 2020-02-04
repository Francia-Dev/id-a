import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadeDeleteComponent } from './comunidade-delete.component';

describe('ComunidadeDeleteComponent', () => {
  let component: ComunidadeDeleteComponent;
  let fixture: ComponentFixture<ComunidadeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
