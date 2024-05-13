import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GetTransactionModel } from "../Models/getTransaction";

const getTransactionState = createFeatureSelector<GetTransactionModel>('transaction')

export const getTransactionList = createSelector(getTransactionState,(state)=>{
  return state.list
})

export const updateTransactionList = createSelector(getTransactionState,(state)=>{
  return state.list
})
