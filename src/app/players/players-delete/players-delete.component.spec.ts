import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersDeleteComponent } from './players-delete.component';

describe('PlayersDeleteComponent', () => {
  let component: PlayersDeleteComponent;
  let fixture: ComponentFixture<PlayersDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
