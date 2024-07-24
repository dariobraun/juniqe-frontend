import { Component, inject } from '@angular/core';
import { ArticleService } from './services/article.service';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, combineLatestWith, map } from 'rxjs';
import { CardComponent } from './components/card/card.component';
import { FilterComponent } from './components/filter/filter.component';
import { SortValue } from './model/sort-value';

@Component({
  selector: 'app-dev-articles',
  standalone: true,
  imports: [CommonModule, CardComponent, FilterComponent],
  templateUrl: './dev-articles.component.html',
  styleUrl: './dev-articles.component.css',
})
export class DevArticlesComponent {
  articleService = inject(ArticleService);

  filterChange = new BehaviorSubject('');
  sortChange = new BehaviorSubject<SortValue>('');
  latestOnlyChanged = new BehaviorSubject<boolean>(false);

  articles$ = this.articleService.getArticles().pipe(
    combineLatestWith(
      this.filterChange,
      this.sortChange,
      this.latestOnlyChanged,
    ),
    map(([response, filter, sort, latest]) => {
      const articles = response.payload.data;
      const filteredArticles = filter
        ? articles.filter(
            (article) =>
              article.author.toLowerCase().includes(filter.toLowerCase()) ||
              article.title.toLowerCase().includes(filter.toLowerCase()),
          )
        : articles;
      const latestOnlyArticles = latest
        ? filteredArticles.filter(
            (article) =>
              new Date(article.dateAdded).getFullYear() ===
              new Date().getFullYear(),
          )
        : filteredArticles;
      const sortedArticles = latestOnlyArticles.sort((a, b) => {
        if (!sort) {
          return 0;
        }
        if (sort === 'author') {
          return a.author.toLowerCase().localeCompare(b.author.toLowerCase());
        }
        if (sort === 'date') {
          return (
            new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
          );
        }

        return 0;
      });
      return sortedArticles;
    }),
  );

  filterArticles(filter: string) {
    this.filterChange.next(filter);
  }

  sortArticles(sortValue: SortValue) {
    this.sortChange.next(sortValue);
  }

  filterLatest(value: boolean) {
    this.latestOnlyChanged.next(value);
  }
}
