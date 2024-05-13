import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetTransaction } from 'src/app/Models/getTransaction';
import { loadTransaction, loadUpdateTransaction } from 'src/app/Store/Transaction.Actions';
import { getTransactionList, updateTransactionList } from 'src/app/Store/Transaction.Selector';

@Component({
  selector: 'app-logistics-edit',
  templateUrl: './logistics-edit.component.html',
  styleUrls: ['./logistics-edit.component.css']
})
export class LogisticsEditComponent {

  editCode = '';
  pageTitle = 'Edit Transaction';
  information!: GetTransaction[];
  errorField!: any;
  details!: any;
  logistics!: string;
  snumber!: string;
  cnumber!: string;
  ecn!: string;

  constructor(private store: Store, private actroute: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
    this.editCode = this.actroute.snapshot.paramMap.get('id') as string
    this.getDetails();
  }

  getDetails(){
    this.store.dispatch(loadTransaction())
    this.store.select(updateTransactionList).subscribe({
      next: (response: any) => {
        this.information = response.info
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  handleSubmit(){
    const idnum = this.editCode
    let updateLogistics = {
      logistics: this.logistics,
      serial_number: this.snumber,
      control_number: this.cnumber,
      ecn: this.ecn
    }
    try{
      this.store.dispatch(loadUpdateTransaction({update: updateLogistics, id: idnum}));
      window.alert('Successfuly update data');
      this.router.navigate(['/protected/transaction']);
    }
    catch(error){

    }

  }
}
