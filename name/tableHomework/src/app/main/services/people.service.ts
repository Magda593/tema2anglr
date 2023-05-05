import { Injectable } from '@angular/core';
import { People } from '../interfaces/people';
import peopleInfo from './people.json';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private peopleList: People[] = peopleInfo;
  peopleListSubject = new Subject<People[]>();

  constructor() {}

  get people(): People[] {
    return this.peopleList;
  }

  set people(peopleToSet: any) {
    this.peopleList = peopleToSet;
    this.peopleListSubject.next(peopleToSet);
  }

  deletePeople(people: People) {
    const index = this.peopleList.findIndex(() => people);
    this.peopleList.splice(index, 1);
    this.peopleListSubject.next(this.peopleList);
  }

  addNewPeople() {
    this.peopleList.push(this.emptyPeople());
    this.peopleListSubject.next(this.peopleList);
  }

  sortByAge(){
    this.peopleList.sort((a,b)=>{
      return a.age < b.age ? 1:-1;
    });
    this.peopleListSubject.next(this.peopleList);
  }

  emptyPeople(): People {
    return {
      firstname: '-',
      lastname: '-',
      age: 0,
      address: '-',
      editedby: '-',
      action: '-',
    };
  }
}
