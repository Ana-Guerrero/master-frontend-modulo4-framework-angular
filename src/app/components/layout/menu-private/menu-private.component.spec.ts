import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrivateComponent } from './menu-private.component';

describe('MenuPrivateComponent', () => {
  let component: MenuPrivateComponent;
  let fixture: ComponentFixture<MenuPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
