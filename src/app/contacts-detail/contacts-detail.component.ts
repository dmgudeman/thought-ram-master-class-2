import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Contact} from '../models/contact';


@Component({
  selector: 'trm-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent {
  @Output() edit = new EventEmitter<void>();
  @Output() back = new EventEmitter<void>();
  @Input()  contact: Contact;
  constructor() { }

  goEdit() {
    this.edit.emit();
  }
  goBack() {
    this.back.emit();
  }
}
