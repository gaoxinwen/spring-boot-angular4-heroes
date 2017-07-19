import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Hero } from './hero';

@Injectable()
export class HeroSearchService {

  private searchUrl = 'http://localhost:8080/api/heroes/search';  // URL to web api

  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('name', term);
    // search is deprecated from 4.0.0. Use params instead.
    return this.http
      .get(this.searchUrl, { params: params })
      .map(response => response.json() as Hero[]);
  }
}
