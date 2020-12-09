import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
// tslint:disable-next-line: import-spacing
import { Router } from  '@angular/router';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { __values } from 'tslib';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginForm: FormGroup;


  /*
  constructor(
    private authService: AuthenticationService, private  router: Router
     ) { }
*/

constructor(private authService: AuthenticationService, private formBuilder: FormBuilder, router: Router){
this.loginForm = this.formBuilder.group({
username: new FormControl('', Validators.compose([
Validators.required
])),
password: new FormControl('', Validators.compose([
Validators.required
]))
});
}
  ngOnInit(): void {
  }
onClickSubmit() {
  const input = {
    username: this.loginForm.get('username'),
    password: this.loginForm.get('password').toString
  };
  alert(input.username.toString() + ': ' + input.password.toString());
  this.newMethod(input);

  // this.authService.login(this.loginForm.get('username'), this.loginForm.get('password')) ;
}

  private newMethod(input: { username: any; password: any; }) {
    this.loginUser(input.username.toString(), input.password.toString());
  }

/*
}



ngOnInit(); {
  }
*/
loginUser(username: string, password: string) {
    this.authService.login(username, password);
  }

  loginUserNoParam(){
    this.authService.loginNoParam();
  }

}
