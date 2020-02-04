import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaIdComponent } from './categoria-id.component';

describe('CategoriaIdComponent', () => {
  let component: CategoriaIdComponent;
  let fixture: ComponentFixture<CategoriaIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
