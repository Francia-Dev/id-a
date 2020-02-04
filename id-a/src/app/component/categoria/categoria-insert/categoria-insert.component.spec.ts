import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaInsertComponent } from './categoria-insert.component';

describe('CategoriaInsertComponent', () => {
  let component: CategoriaInsertComponent;
  let fixture: ComponentFixture<CategoriaInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
