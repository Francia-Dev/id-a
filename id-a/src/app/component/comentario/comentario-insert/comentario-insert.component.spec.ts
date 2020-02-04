import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioInsertComponent } from './comentario-insert.component';

describe('ComentarioInsertComponent', () => {
  let component: ComentarioInsertComponent;
  let fixture: ComponentFixture<ComentarioInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
