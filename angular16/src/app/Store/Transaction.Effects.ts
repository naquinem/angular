import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UsersService } from "../Services/users.service";
import { loadAlert, loadCreateTransaction, loadCreateTransactionSuccess, loadDeleteTransaction, loadDeleteTransactionSuccess, loadLogin, loadLoginSuccess, loadRegister, loadTransaction, loadTransactionFail, loadTransactionSuccess, loadUpdateTransaction, saveTokenToStorage } from "./Transaction.Actions";
import { catchError, exhaustMap, map, of, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";


@Injectable()

export class TransactionEffects{

  constructor(private action$:Actions, private service: UsersService, private router: Router){

  }

  _loadTransaction=createEffect(() =>
    this.action$.pipe(
      ofType(loadTransaction),
      exhaustMap(()=>{
        return this.service.getDetails().pipe(
          map((data)=>{
            return loadTransactionSuccess({list:data})
          }),
          catchError((_err)=>of(loadTransactionFail({errorMessage: _err.message})))
        )
      })
    )
  )

  _loadTransactionCreate=createEffect(() =>
    this.action$.pipe(
      ofType(loadCreateTransaction),
      exhaustMap((action)=>{
        return this.service.createLogistics(action.create).pipe(
          map(()=>{
            return loadCreateTransactionSuccess()
          }),
          catchError((_err)=>of(loadAlert({message: 'Data is not created in database', status: 'fail'})))
        )
      })
    )
  )

  _loadTransactionUpdate=createEffect(() =>
    this.action$.pipe(
      ofType(loadUpdateTransaction),
      exhaustMap((action)=>{
        return this.service.updateLogistics(action.update, action.id).pipe(
          map(()=>{
            return loadCreateTransactionSuccess()
          }),
          catchError((_err)=>of(loadAlert({message: 'Data is not created in database', status: 'fail'})))
        )
      })
    )
  )

  _loadTransactionDelete=createEffect(() =>
    this.action$.pipe(
      ofType(loadDeleteTransaction),
      exhaustMap((action)=>{
        return this.service.deleteLogistics(action.deleteId).pipe(
          map(()=>{
            window.alert('Successfully deleted');
            window.location.href = '/protected/transaction'
            return loadDeleteTransactionSuccess();
          }),
          catchError((_err)=>of(loadAlert({message: 'Data is not created in database', status: 'fail'})))
        )
      })
    )
  )

  _loadLogin=createEffect(() =>
    this.action$.pipe(
      ofType(loadLogin),
      exhaustMap((action)=>{
        return this.service.handleSubmit(action.login).pipe(
          tap((response: any) => {
            sessionStorage.setItem('token', response.token);
            this.router.navigate(['/protected']);
          }),
          map(()=>{
            return loadLoginSuccess()
          }),
          catchError((_err)=>of(loadAlert({message: 'Email or password is not correct', status: 'fail'})))
        )
      })
    )
  )
  _loadRegister=createEffect(() =>
    this.action$.pipe(
      ofType(loadRegister),
      switchMap((action)=>{
        return this.service.registerSubmit(action.register).pipe(
          tap((response)=>{
            console.log(response)
          }),
          switchMap((response)=>{
            return of(loadLoginSuccess(), loadAlert({message: 'Successfully registered account', status: 'pass'}))
          }),
          catchError((_err)=>of(loadAlert({message: 'Unable to register credentials, please Provide a valid details', status: 'fail'})))
        )
      })
    )
  )
}
