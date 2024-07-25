import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DevArticlesComponent } from './dev-articles.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleService } from './services/article.service';
import { of } from 'rxjs';
import { mockResponse } from '../mock-data/mock-response';

describe('DevArticlesComponent', () => {
  let component: DevArticlesComponent;
  let fixture: ComponentFixture<DevArticlesComponent>;

  const mockArticleService = {
    getArticles: () => of(mockResponse),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevArticlesComponent, HttpClientModule],
      providers: [{ provide: ArticleService, useValue: mockArticleService }],
    }).compileComponents();

    fixture = TestBed.createComponent(DevArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show all articles without filter', waitForAsync(() => {
    component.articles$.subscribe((value) => {
      expect(value).toEqual(mockResponse.payload.data);
    });
  }));

  it('should correctly filter by author', waitForAsync(() => {
    const filterInput = fixture.debugElement.nativeElement.querySelector(
      "input[data-testid='filter-input']",
    );
    const author = 'author1';
    filterInput.value = author;
    filterInput.dispatchEvent(new Event('input'));
    component.articles$.subscribe((value) => {
      expect(value).toEqual(
        mockResponse.payload.data.filter(
          (article) => article.author === author,
        ),
      );
    });
  }));
});
