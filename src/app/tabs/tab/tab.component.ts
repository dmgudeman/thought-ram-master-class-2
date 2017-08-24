import { Component,  Input } from '@angular/core';
// import {TabsComponent} from '../tabs/tabs.component';

@Component({
  selector: 'trm-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent  {
  selected = false;
  @Input() title: string;
  constructor() { }

  show(isVisible = true) {
    this.selected = isVisible;
  }

}
