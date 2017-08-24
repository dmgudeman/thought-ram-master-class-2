import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {ContactsService} from '../contacts.service';
import {Contact} from '../models/contact';
import {EventBusService} from '../event-bus.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  title$: Observable<string>;
  contact: Contact = <Contact>{ address: {}};
  constructor(private eventBus: EventBusService,  private route: ActivatedRoute,
              private contactsService: ContactsService, private router: Router) { }
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.contactsService.getContact(id).subscribe(contact => {
      this.contact = contact;
      this.title$ = this.eventBus.observe('appTitleChange')
      this.eventBus.emit('appTitleChange', `Editing: ${contact.name}`);
    });
  }
  save(contact: Contact) {
    this.contactsService.updateContact(this.contact).subscribe((data) => {
      this.contact = data;
      this.router.navigate(['contact', data.id]);
    });
  }
  cancel(contact: Contact) {
    this.router.navigate(['contact', contact.id]);
  }

}
