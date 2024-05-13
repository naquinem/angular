import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/Models/Login';
import { loadLogin } from 'src/app/Store/Transaction.Actions';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private store: Store, private router: Router) {}
  email!: string
  password!: string
  errorField!: string

  handleSubmit(){
    const loginData: Login = {
      email: this.email,
      password: this.password
    }
    try{
      this.store.dispatch(loadLogin({login: loginData}))
      window.alert('Successfully sign in');
    }
    catch(error) {
      console.log(error)
    }
  }
}
