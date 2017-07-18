import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

  private heroesUrl = 'http://localhost:8080/api/heroes';  // URL to web api

  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    console.log(term);
    return this.http
      .get(`${this.heroesUrl}/search/?name=${term}`)
      .map(response => response.json() as Hero[]);
  }
}
