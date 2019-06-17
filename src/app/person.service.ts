import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Person } from './person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {
Url = 'http://localhost:62580/api/People';
  constructor(private http: HttpClient) { }
getAllPeople(): Observable<Person[]> {
  return this.http.get<Person[]>(this.Url);
}
getPeoplebtId(Id: number): Observable<Person> {
  return this.http.get<Person>(this.Url + '/' + Id);
}
AddPeople(person: Person): Observable<Person> {
  // tslint:disable-next-line:prefer-const
  let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
// tslint:disable-next-line:prefer-const
let option = {
headers: httpHeader
};
return this.http.post<Person>(this.Url , person , option);
}
EditPeople(person: Person): Observable<number> {
  // tslint:disable-next-line:prefer-const
  let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
// tslint:disable-next-line:prefer-const
let option = {
headers: httpHeader
};
return this.http.put<number>(this.Url + '/' + person.Id , person , option);
}
DeletePeople(Id: number): Observable<number> {
  // tslint:disable-next-line:prefer-const
  let httpHeader = new HttpHeaders().set('Content-Type' , 'application/json');
return this.http.delete<number>(this.Url + '/' + Id );
}
}
