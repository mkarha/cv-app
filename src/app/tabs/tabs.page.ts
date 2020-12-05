/*
The reqired methods for the tab pages.
*/

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  constructor(private authService: AuthenticationService
    ) { }


  ngOnInit() {
  }

  getTime() {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    const dateTime = date + ' ' + time;
    return dateTime;
  }

  logoutUser(){
    this.authService.logout();
  }

}

