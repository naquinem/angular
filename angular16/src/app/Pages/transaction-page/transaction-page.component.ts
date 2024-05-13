
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetTransaction } from 'src/app/Models/getTransaction';
import { loadDeleteTransaction, loadTransaction } from 'src/app/Store/Transaction.Actions';
import { getTransactionList } from 'src/app/Store/Transaction.Selector';

@Component({
  selector: 'app-transaction-page',
  templateUrl: './transaction-page.component.html',
  styleUrls: ['./transaction-page.component.css']
})
export class TransactionPageComponent {

  constructor(
    private store: Store,
    private router: Router,
  ) {

  }
  logistics!: GetTransaction[]

  ngOnInit(){
    this.getDetails();
  }
  getDetails(){
    this.store.dispatch(loadTransaction());
    this.store.select(getTransactionList).subscribe({
      next: (response: any) => {
        this.logistics = response.info;
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
  handleEdit(id: string){
    this.router.navigateByUrl('/protected/logistics/edit/'+id);
  }
  handleDelete(deleteId: string){
    this.store.dispatch(loadDeleteTransaction({deleteId: deleteId}));
  }
}
