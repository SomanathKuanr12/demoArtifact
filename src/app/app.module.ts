import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComplaintComponent } from './new-complaint/new-complaint.component';
import { ComplaintListComponent } from './complaint-list/complaint-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComplaintComponent,
    ComplaintListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
