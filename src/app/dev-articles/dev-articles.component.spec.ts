import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevArticlesComponent } from './dev-articles.component';

describe('DevArticlesComponent', () => {
  let component: DevArticlesComponent;
  let fixture: ComponentFixture<DevArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevArticlesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DevArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
