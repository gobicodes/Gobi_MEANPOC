import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    public token: string;

        constructor(private http: Http) {
            // set token if saved in local storage
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            this.token = currentUser && currentUser.token;
        }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', {username: username, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                const user = response.json();
                if (user && user.token) {
                    this.token = user.token;
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout() {
        // clear token remove user from local storage to log user out
        this.token = null;
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
