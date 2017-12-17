import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';


import { AuthGuard } from './_guards/index';
import {UsermanagerComponent} from './usermanager/usermanager.component';
 
const appRoutes: Routes = [
    { path: '', redirectTo: 'login',pathMatch: 'full' },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard],
        children: [
            // { path: '', component:MycalendarComponent },
            // { path: 'calendar', component:MycalendarComponent },
            // { path: 'crf', component: CampaignrequestformComponent },
            { path: 'usermanager', component: UsermanagerComponent }
        ]
    },
    { path: 'login', component: LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);