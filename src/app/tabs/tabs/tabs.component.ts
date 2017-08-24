import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import {TabComponent} from '../tab/tab.component';


@Component({
  selector: 'trm-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements AfterContentInit{

  @ContentChildren(TabComponent, {descendants: true})
  tabs: QueryList<TabComponent>;

  ngAfterContentInit() {
    this.selected(this.tabs.first);
  }

  addTab(tab: TabComponent) {
    if (this.tabs.length === 0) {
      this.selected(tab);
    }
  }
  selected(tab: TabComponent) {
    this.tabs.forEach(it => {
      it.selected = false;
    });
    tab.show();
  }

}
