import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComunidadeListComponent } from './comunidade-list.component';

describe('ComunidadeListComponent', () => {
  let component: ComunidadeListComponent;
  let fixture: ComponentFixture<ComunidadeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComunidadeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComunidadeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
