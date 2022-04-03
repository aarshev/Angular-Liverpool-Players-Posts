import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPostListComponent } from './player-post-list.component';

describe('PlayerPostListComponent', () => {
  let component: PlayerPostListComponent;
  let fixture: ComponentFixture<PlayerPostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerPostListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
