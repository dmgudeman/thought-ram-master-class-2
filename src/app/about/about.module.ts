import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { AboutComponent }      from './about.component';
import { RouterModule }        from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AboutComponent }
    ]),
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    AboutComponent,
  ]
})
export class AboutModule { }
