import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadeUpdateComponent } from './comunidade-update.component';

describe('ComunidadeUpdateComponent', () => {
  let component: ComunidadeUpdateComponent;
  let fixture: ComponentFixture<ComunidadeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
