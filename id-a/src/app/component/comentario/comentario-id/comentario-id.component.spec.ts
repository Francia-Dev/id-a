import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentarioIdComponent } from './comentario-id.component';

describe('ComentarioIdComponent', () => {
  let component: ComentarioIdComponent;
  let fixture: ComponentFixture<ComentarioIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentarioIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
