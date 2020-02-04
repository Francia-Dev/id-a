import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadeInsertComponent } from './comunidade-insert.component';

describe('ComunidadeInsertComponent', () => {
  let component: ComunidadeInsertComponent;
  let fixture: ComponentFixture<ComunidadeInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadeInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadeInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
