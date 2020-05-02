import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideArticlesComponent } from './side-articles.component';

describe('SideArticlesComponent', () => {
  let component: SideArticlesComponent;
  let fixture: ComponentFixture<SideArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
