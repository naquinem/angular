import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Register } from 'src/app/Models/Register';
import { loadRegister } from 'src/app/Store/Transaction.Actions';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(private store: Store, private router: Router) {}
  fullname!: string
  email!: string
  password!: string
  cpassword!: string
  inumber!: string
  errorField!: string

  handleSubmit(){
    const registerData:Register = {
      fullname: this.fullname,
      id_number: this.inumber,
      email: this.email,
      password: this.password,
      password_confirmation: this.cpassword,

    }
    try{
      this.store.dispatch(loadRegister({register: registerData}))
      this.router.navigate(['/sign-in']);
    }
    catch(error){
      console.log(error)
    }
  }
}
