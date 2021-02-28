import { Injectable } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor() { }


  getHeroes(): Hero[] {
    return HEROES;
  }

}
