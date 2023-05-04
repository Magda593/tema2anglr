import { Injectable } from '@angular/core';
import { People } from '../interfaces/people';
import peopleInfo from './people.json'


@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private peopleList: People[] = peopleInfo;

  constructor() { }
}

