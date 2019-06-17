import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {PersonService} from '../person.service';
import {Person} from '../person';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  datasaved = false;
  PersonForm: any;
  allPerson: Observable<Person[]>;
  personIdToUpdate = null;
  message = null;
  constructor (private formBuilder: FormBuilder, private personService: PersonService) { }

  ngOnInit() {
    this.PersonForm = this.formBuilder.group ({
      Name: ['', Validators.required],
      Address: ['', Validators.required],
      Gender: ['', Validators.required],
      Mobile_No: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]]
    } );
    this.loadAllPerson();
  }
  loadAllPerson() {
   this.allPerson = this.personService.getAllPeople();
  }
  onFormSubmit() {

    this.datasaved = false;
    // tslint:disable-next-line:prefer-const
    let person = this.PersonForm.value;
    console.log(person) ;
    this.CreatePerson(person);

    this.PersonForm.reset();
  }
  CreatePerson(person: Person) {
    if (this.personIdToUpdate == null) {
      this.personService.AddPeople(person).subscribe(
        () => {
this.datasaved = true;
this.message = 'Data Saved Successfully';
this.loadAllPerson();
this.personIdToUpdate = null;
this.PersonForm.reset();
        }
        );
    } else {
      person.Id = this.personIdToUpdate;
      this.personService.EditPeople(person).subscribe(
        () => {
          this.datasaved = true;
          this.message = 'Data Updated Successfully';
          this.loadAllPerson();
          this.personIdToUpdate = null;
          this.PersonForm.reset();
        });
    }
  }
  loadPersonToEdit(PersonId: number) {
    this.personService.getPeoplebtId(PersonId).subscribe(person => {
      this.message = null;
this.datasaved = false;
this.personIdToUpdate = person.Id;
this.PersonForm.controls['Name'].setValue(person.Name);
this.PersonForm.controls['Address'].setValue(person.Address);
this.PersonForm.controls['Mobile_No'].setValue(person.Mobile_No);
this.PersonForm.controls['Email'].setValue(person.Email);
this.PersonForm.controls['Gender'].setValue(person.Gender);
    });
  }
  loadPersonToDelete(Id: number) {
this.personService.DeletePeople(Id).subscribe(() => {
  this.datasaved = true;
          this.message = 'Data Deleted Successfully';
          this.loadAllPerson();
          this.personIdToUpdate = null;
          this.PersonForm.reset();
});
  }
  resetForm() {
    this.PersonForm.reset();
    this.datasaved = false;
    this.message = null;
  }
}
