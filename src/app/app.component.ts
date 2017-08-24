import { Component, OnInit } from '@angular/core';
import {EventBusService} from './event-bus.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'trm-contacts-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class ContactsAppComponent implements OnInit {

  title$: Observable<string>;
  constructor(private eventBus: EventBusService) {}

  ngOnInit() {
    this.title$ = this.eventBus.observe('appTitleChange')
    this.eventBus.emit('appTitleChange', 'Angular Master Class');
  }

}
