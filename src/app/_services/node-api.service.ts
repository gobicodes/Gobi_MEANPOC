import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { CampaignDetails } from 'app/_models/camapaigndetails';
import { AuthenticationService } from './authentication.service';
@Injectable()
export class NodeApiService {

  constructor(private http: Http, private authenticationService: AuthenticationService) { }

    buildrequestoptions() {
      // add authorization header with jwt token
      // let headers = new Headers({ 'x-access-token': this.authenticationService.token });
      // let options = new RequestOptions({ headers: headers });

      // return options;
      return new RequestOptions({ headers: new Headers({ 'x-access-token': this.authenticationService.token }) });
    }

    // Get all posts from the API
    getcampaignrequestsbyid(userid) {
      const options = this.buildrequestoptions();
      // TODO:Need to get the data based on userid
      return this.http.get('/api/getcampaignrequests/' + userid, options)
        .map(res => res.json());
    }

     // Get all posts from the API
     getcampaignrequests(userid) {
      if (userid !== '')
      // tslint:disable-next-line:one-line
      {
        return this.getcampaignrequestsbyid(userid);
      }

      const options = this.buildrequestoptions();
      // TODO:Need to get the data based on userid
      return this.http.get('/api/getcampaignrequests', options)
        .map(res => res.json());
    }

    getroles(){
      const options = this.buildrequestoptions();
      // TODO:Need to get the data based on userid
      return this.http.get('/api/getroles', options)
        .map(res => res.json());
    }


    getcampaignrequest(campid) {
      const options = this.buildrequestoptions();
      return this.http.get('/api/campaign/' + campid, options)
      .map(res => res.json());
    }

    addcampaignrequest(event) {
      const options = this.buildrequestoptions();
      return this.http.post('/api/campaign/add', event, options)
      .map(res => res.json());
    }

     editcampaignrequest(event) {
      const options = this.buildrequestoptions();
       return this.http.post('/api/campaign/edit/' + event.campaign_id, event, options)
       .map(res => res.json());
     }

}
