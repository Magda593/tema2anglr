import { Component, OnInit } from '@angular/core';
import { People } from '../../interfaces/people';
import { PeopleService } from '../../services/people.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  peopleList!: People[];

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((res) => {
      console.log(res);
    });
    this.peopleService.peopleListSubject.subscribe((res) => {
      this.peopleList = [...res];
    });
    
  }

  ngOnInit(): void {
    this.peopleList = this.peopleService.people;
    console.log(this.peopleList);
  }

  deletePeople(people: People) {
    this.peopleService.deletePeople(people);
  }

  addNewPeople(){
    this.peopleService.addNewPeople();
  }

  sortByAge(){
    this.peopleService.sortByAge();
  }

  editPeople(people: People){
    this.router.navigate([],{
      relativeTo: this.route,
      queryParams:{
        peopleLastName: people.lastname,
        peopleFirstName: people.firstname,
        peopleAge:people.age,
        peopleAddress: people.address,
        peopleEditedBy: people.editedby
      },
      queryParamsHandling: 'merge',
    })
  }
}
