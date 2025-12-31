import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Convertidores } from './convertidores';

describe('Convertidores', () => {
  let component: Convertidores;
  let fixture: ComponentFixture<Convertidores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Convertidores]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Convertidores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
