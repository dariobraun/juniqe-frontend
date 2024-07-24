import { Component, inject } from '@angular/core';
import { ArticleService } from './services/article.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';
import {CardComponent} from "./components/card/card.component";

@Component({
  selector: 'app-dev-articles',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './dev-articles.component.html',
  styleUrl: './dev-articles.component.css',
})
export class DevArticlesComponent {
  articleService = inject(ArticleService);

  articles$ = this.articleService
    .getArticles()
    .pipe(map((response) => response.payload.data));
}
