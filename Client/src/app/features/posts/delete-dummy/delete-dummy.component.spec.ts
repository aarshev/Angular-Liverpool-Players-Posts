import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDummyComponent } from './delete-dummy.component';

describe('DeleteDummyComponent', () => {
  let component: DeleteDummyComponent;
  let fixture: ComponentFixture<DeleteDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDummyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
