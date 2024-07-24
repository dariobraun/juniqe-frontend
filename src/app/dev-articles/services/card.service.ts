import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../constants';
import { Response } from '../model/response';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private http = inject(HttpClient);

  getCards() {
    return this.http.get<Response>(API_URL);
  }
}
