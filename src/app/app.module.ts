import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ContactsAppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import {ContactsDetailComponent} from './contacts-detail/contacts-detail.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import {FormsModule} from '@angular/forms';
import { ContactsDetailViewComponent } from './contacts-detail-view/contacts-detail-view.component';
import { TabComponent} from './tabs/tab/tab.component';
import { TabsComponent} from './tabs/tabs/tabs.component';
import { EventBusService} from './event-bus.service';
import {ContactsService} from './contacts.service';
import { ContactsDashboardComponent } from './contacts-dashboard/contacts-dashboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    ContactsAppComponent,
    ContactsListComponent,
    ContactsDetailComponent,
    ContactsEditorComponent,
    ContactsDetailViewComponent,
    TabComponent,
    TabsComponent,
    ContactsDashboardComponent,
    AboutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [EventBusService, ContactsService,
    {
      provide: 'ConfirmNavigationGuard',
      useValue: doConfirm
    }
  ],
  bootstrap: [ContactsAppComponent]
})
export class ContactsModule {

}

export function doConfirm() {
  return window.confirm('Navigate away without saving?');
}

