import { Component, Input } from '@angular/core';
import { Article } from '../../model/article';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() article?: Article;
}
