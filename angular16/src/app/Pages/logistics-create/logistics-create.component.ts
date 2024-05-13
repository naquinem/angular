import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCreateTransaction } from 'src/app/Store/Transaction.Actions';

@Component({
  selector: 'app-logistics-create',
  templateUrl: './logistics-create.component.html',
  styleUrls: ['./logistics-create.component.css']
})
export class LogisticsCreateComponent {
  constructor(private store: Store, private router: Router) {}
  errorField!: any
  details!: any
  logistics!: string
  snumber!: string
  cnumber!: string
  ecn!: string
  handleSubmit() {
    let addLogistics = {
      logistics: this.logistics,
      serial_number: this.snumber,
      control_number: this.cnumber,
      ecn: this.ecn
    }
    try{
      this.store.dispatch(loadCreateTransaction({create: addLogistics}));
      window.alert(`Successfuly ${addLogistics.serial_number}`);
      this.router.navigate(['/protected/transaction']);
    }
    catch(error){
      console.log(error)
    }

  }
}
