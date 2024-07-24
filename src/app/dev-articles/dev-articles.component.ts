import { Component, inject } from '@angular/core';
import { CardService } from './services/card.service';
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
  cardService = inject(CardService);

  cards$ = this.cardService
    .getCards()
    .pipe(map((response) => response.payload.data));
}
