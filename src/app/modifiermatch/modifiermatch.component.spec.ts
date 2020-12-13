import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermatchComponent } from './modifiermatch.component';

describe('ModifiermatchComponent', () => {
  let component: ModifiermatchComponent;
  let fixture: ComponentFixture<ModifiermatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifiermatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
