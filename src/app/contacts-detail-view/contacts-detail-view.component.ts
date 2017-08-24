import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Contact} from '../models/contact';
import {ContactsService} from '../contacts.service';


@Component({
  selector: 'trm-contacts-detail-view',
  templateUrl: './contacts-detail-view.component.html',
  styleUrls: ['./contacts-detail-view.component.css']
})
export class ContactsDetailViewComponent implements OnInit {
 // @Output() edit = new EventEmitter<Contact>();
 // @Output() back = new EventEmitter<void>();

  contact: Contact;
  id: string;
  constructor(private route: ActivatedRoute, private router: Router, private contactsService: ContactsService) { }
  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    // this.route.params.subscribe(params => this.id = params['id'])
    // this.contactsService.getContact(this.id).subscribe(contact => {
    //  this.contact = contact;
    // });
     this.route.paramMap.switchMap(paramMap => this.contactsService.getContact(paramMap.get('id')))
      .subscribe(contact => {
        this.id = contact.id.toString();
        this.contact = contact;
      });
  }

  navigateToEditor (contact: Contact) {
    this.router.navigate([`/contact/${this.id}/edit`] );
  }
  navigateToList() {
    this.router.navigate(['/']);
  }

}
