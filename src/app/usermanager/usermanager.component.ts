import { Component, OnInit } from '@angular/core';
import { AlertService, NodeApiService,UserService } from '../_services/index';
import { error } from 'util';
import { User } from '../_models/user';
import { Router, ActivatedRoute } from '@angular/router';
const R = require('ramda');
@Component({
  selector: 'app-usermanager',
  templateUrl: './usermanager.component.html',
  styleUrls: ['./usermanager.component.css']
})
export class UsermanagerComponent implements OnInit {

  sourcedata: User;
  rolelist: object;
  settings: object;


  constructor(  private nodeapiservice: NodeApiService, 
    private userservice: UserService,
    private alertService: AlertService,
    private router: Router) {
    this.getallusers();
    this.setroles();
    this.settings = {
      delete: {
        confirmDelete: true,
      },
      add: {
        confirmCreate: true,
      },
      edit: {
        confirmSave: true,
      },
      columns: {
        user_name: {
          title: 'User Name'
        },
        password: {
          title: 'Password'
        },
        email_address: {
          title: 'Email'
        },
        role_name: {
          title: 'Role',
          editor: {
            type: 'list',
            config: {
              list: [{ value: '1', title: 'ADMIN' }, { value: '2', title: 'CRMUSER' }, { value: '3', title: 'OTHERUSER' },
              { value: '4', title: 'LOCALUSER' }]
            },
          },
        },
      },
      sort: true,
      'pager.display': true
    };

  }

  ngOnInit() {
  }


  setroles(){
      this.nodeapiservice.getroles().subscribe(data => {
        console.log(data);
      this.rolelist = data;
   },
  error => {
   this.alertService.error(error);
  });
  }



  getallusers(){
    this.userservice.getAll().subscribe(data => {
         this.sourcedata = data;
    },
   error => {
    this.alertService.error(error);
   });
  }

  onDeleteConfirm(event) {
    if (window.confirm('Are you sure you want to delete?')) {
      this.userservice.delete(event.data['user_id']).subscribe(data => {
        this.alertService.success('Deleted successfully');
      },
      error => {
      this.alertService.error(error);
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onSaveConfirm(event) {
    if (window.confirm('Are you sure you want to save?')) {
      event.newData['role_id'] =  event.newData['role_name'];
      event.newData =  R.omit(['role_name'],  event.newData);
      this.userservice.update(event.newData).subscribe(data => {
        this.alertService.success('Updated  successfully');
      },
      error => {
      this.alertService.error(error);
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event) {
    if (window.confirm('Are you sure you want to create?')) {
      event.newData['role_id'] =  event.newData['role_name'];
      event.newData =  R.omit(['role_name'],  event.newData);
      this.userservice.create(event.newData).subscribe(data => {
        this.alertService.success('Created  successfully');
      },
      error => {
      this.alertService.error(error);
      });
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }

}
