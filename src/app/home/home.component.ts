import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: any;
    users: User[] = [];
    visibilestyle: string;

    constructor(private userService: UserService,  private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.visibilestyle = this.getvisibility()
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        // this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    returnfalse(menuItem: string) {
        this.router.navigate(['/home/' + menuItem]);

        if (menuItem === 'crf') { localStorage.setItem('currentcampreqid', ''); }

      return false;
    }

    // tslint:disable-next-line:one-line
    getvisibility(){

        if (this.currentUser) {

            if (this.currentUser.role !== 'ADMIN')
            // tslint:disable-next-line:one-line
            {
                    return 'hidden';
            }
            // tslint:disable-next-line:one-line
            else
            // tslint:disable-next-line:one-line
            {
                return 'visible';
            }
        }
        return 'hidden';


    }

    private loadAllUsers() {
        // this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
