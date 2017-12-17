import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { AuthenticationService } from './index';
import { User } from '../_models/index';

@Injectable()
export class UserService {
    options: RequestOptions;
    constructor(private http: Http, private authenticationService: AuthenticationService) {
                // add authorization header with jwt token
                const headers = new Headers({ 'x-access-token': this.authenticationService.token });
                this.options = new RequestOptions({ headers: headers });
     }

    getAll() {
        return this.http.get('/api/users', this.options).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('/api/users/' + id, this.options).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('/api/users/add', user, this.options).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.post('/api/users/edit/' + user.user_id, user, this.options).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('/api/users/delete/' + id, this.options).map((response: Response) => response.json());
    }


// tslint:disable-next-line:eofline
}