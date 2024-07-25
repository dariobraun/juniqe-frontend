import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { mockArticle } from '../../../mock-data/mock-article';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.article = mockArticle;
    fixture.detectChanges();
  });

  it('should increase number of likes when user clicks "LIKE" button', () => {
    const toggleSpy = spyOn(component, 'toggleLike');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    expect(toggleSpy).toHaveBeenCalledTimes(1);
  });
});
