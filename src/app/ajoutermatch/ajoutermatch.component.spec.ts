import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermatchComponent } from './ajoutermatch.component';

describe('AjoutermatchComponent', () => {
  let component: AjoutermatchComponent;
  let fixture: ComponentFixture<AjoutermatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutermatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
