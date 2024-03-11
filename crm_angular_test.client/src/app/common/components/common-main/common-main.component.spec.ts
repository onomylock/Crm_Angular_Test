import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonMainComponent } from './common-main.component';

describe('CommonMainComponent', () => {
  let component: CommonMainComponent;
  let fixture: ComponentFixture<CommonMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommonMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
