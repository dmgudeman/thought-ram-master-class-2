import { Injectable } from '@angular/core';
import {Contact} from './models/contact';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

interface ContactResponse  { item: Contact; }
interface ContactsResponse { items: Contact[]; }

@Injectable()
export class ContactsService {
  API_ENDPOINT = 'http://localhost:4201/api';
  constructor(private http: HttpClient) {};

  getContacts(): Observable<Array<Contact>> {
    let url = this.API_ENDPOINT + '/contacts';
    return this.http.get<ContactsResponse>(url)
      .map((data: ContactsResponse) => data.items);
  }

  search(term: string): Observable<Array<Contact>> {
    let url = this.API_ENDPOINT + '/search?text=' + term;
    return this.http.get<ContactsResponse>(url)
      .map((data: ContactsResponse) => data.items);
  }

  getContact(id: string): Observable<Contact> {
    let url = this.API_ENDPOINT + '/contacts/' + id;
    return this.http.get<ContactResponse>(url)
      .map((data: ContactResponse) => data.item);
  }

  updateContact(contact: Contact) {
    let url = this.API_ENDPOINT + '/contacts/' + contact.id.toString();
    return this.http.put<ContactResponse>(url, contact)
      .map((data : ContactResponse) => data.item);
  }
}
