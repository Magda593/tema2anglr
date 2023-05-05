import { Component, OnInit } from '@angular/core';
import { People } from '../../interfaces/people';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  newPeople: People = {
    firstname: '',
    lastname: '',
    age: 0,
    address: '',
    editedby: '',
    action: '',
  };

  isVisible  = false;
  isOkLoading = false;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    this.addPeople();
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 400);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  addPeople(): void {
    this.httpClient.post('people.json', this.newPeople).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.newPeople = {
      firstname: '',
      lastname: '',
      age: 0,
      address: '',
      editedby: '',
      action: '',
    };
  };

}
