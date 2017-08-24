import { Injectable } from '@angular/core';
// import {Subject} from 'rxjs/Subject';
// import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

export interface EventBusArgs {
  type: string;
  data: any;
}

@Injectable()
export class EventBusService {

  private _messages$ = new BehaviorSubject<EventBusArgs>({type: 'appTitleChange', data: 'Contacts'});

  emit(eventType: string, data: any) {
    this._messages$.next({ type: eventType, data: data });
  }

  observe(eventType: string) {
    return this._messages$
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }

}
