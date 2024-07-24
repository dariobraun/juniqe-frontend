import { Component, Input } from '@angular/core';
import { Article } from '../../model/article';
import {DatePipe, NgIf, NgOptimizedImage} from "@angular/common";
import {AvatarComponent} from "./components/avatar/avatar.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, NgOptimizedImage, DatePipe, AvatarComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() article?: Article;
}
