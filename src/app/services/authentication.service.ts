import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

authState = new BehaviorSubject(false);
  loginForm: any;

  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }

  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }


  /*else
  {
    this.logout();
  }
  };*/
  //  this.storage.set('LOGIN', dummy_response);
  //  if('USER_INFO'='LOGIN'
  login(username: string, password: string) {
    var dummy_response = {
      username: "Guest",
      password: "login"
    };
    alert(username.toString() +": " + password.toString());
    if (username == dummy_response.username) {
      if(password == dummy_response.password) {

      this.storage.set('USER_INFO', dummy_response).then((response) => {
        this.router.navigate(['/tabs']);
        this.authState.next(true);
        
      });
    }
    else{
      alert("Wrong password");
      this.logout();
    }
    }
    else {
      this.logout();
    }
    username = '';
    password = '';
  };

  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }

  /*
    Loging in while the login is not yet functional
  */
  loginNoParam() {
    var dummy_response = {
      username: 'Guest',
      password: 'login'
    };
      this.storage.set('USER_INFO', dummy_response).then((response) => {
        this.router.navigate(['/tabs']);
        this.authState.next(true);
      });
    }

}
