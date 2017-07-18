import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Hero } from './hero';

@Injectable()
export class HeroService {

  private heroesUrl = 'http://localhost:8080/api/heroes';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });


  constructor(private http: Http) {
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json() as Hero[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    let id = 0;
    return this.genId()
      .then(value => id = value)
      .then(response => this.http
        .post(this.heroesUrl, JSON.stringify({ id: id, name: name }), { headers: this.headers })
        .toPromise()
        .then(res => res.json() as Hero)
        .catch(this.handleError)
      );
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private genId(): Promise<number> {
    let maxId = 0;
    return this.getHeroes().then(function (item) {
      item.forEach(function (value) {
        maxId = Math.max(maxId, typeof value.id === 'number' ? value.id : maxId);
      });
      return maxId + 1;
    });
  }

}
