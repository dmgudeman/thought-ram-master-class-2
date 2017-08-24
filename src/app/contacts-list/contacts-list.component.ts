import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/do';

@Component({
  selector: 'trm-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {

  private term$ = new Subject<string>();
  contacts$: Observable<Array<Contact>>;
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.contacts$ = this.term$.debounceTime(400)
      .distinctUntilChanged()
      // .do(data => console.log(data))
      .switchMap(data => this.contactsService.search(data))
      .merge(this.contactsService.getContacts());


  }
  trackByContacts(index: number | string, contact: Contact): number | string { return contact.id;
  }
  // search(term: string) {
  //  this.contacts$ = this.contactsService.search(term);
  // }
}
