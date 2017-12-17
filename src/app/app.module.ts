import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalendarComponent } from 'fullcalendar-ag4';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { routing } from './app.routing';
import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService ,NodeApiService} from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { BaseRequestOptions } from '@angular/http';
import { UsermanagerComponent } from './usermanager/usermanager.component';
// Define the routes
// const ROUTES = [
//   {
//     path: '',//
//     redirectTo: 'posts',
//     pathMatch: 'full'
//   },
//   {
//     path: 'posts',
//     component: MycalendarComponent
//   }
// ];
@NgModule({
  declarations: [
    AppComponent,

    CalendarComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
 
    UsermanagerComponent,
  ],
  imports: [
    Ng2SmartTableModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    // RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [NodeApiService, AuthGuard,
    AlertService,
    AuthenticationService,
    UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
