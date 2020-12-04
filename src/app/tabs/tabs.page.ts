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

  logoutUser(){
    this.authService.logout();
  }

}

