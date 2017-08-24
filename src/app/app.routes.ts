// import {ContactsListComponent} from './contacts-list/contacts-list.component';
// import {ContactsDetailComponent} from './contacts-detail/contacts-detail.component';
import {ContactsEditorComponent} from './contacts-editor/contacts-editor.component';
import {ContactsDetailViewComponent} from './contacts-detail-view/contacts-detail-view.component';
import {AboutComponent} from './about/about.component';
import {ContactsDashboardComponent} from './contacts-dashboard/contacts-dashboard.component';

export const APP_ROUTES = [
  {
    path: '',
    component: ContactsDashboardComponent,
    children: [
      { path: '', redirectTo: 'contact/0', pathMatch: 'full' },
      { path: 'contact/:id', component: ContactsDetailViewComponent },
      { path: 'contact/:id/edit', component: ContactsEditorComponent, canDeactivate: ['ConfirmNavigationGuard'] }
    ]
  },
  { 
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
  { path: '**', redirectTo: 'contact/0' },
];
