
import { createReducer, on } from "@ngrx/store";
import { loadDeleteTransactionSuccess, loadTransactionFail, loadTransactionSuccess } from "./Transaction.Actions";
import { transactionState } from "./Transaction.State";

const _Transaction = createReducer(transactionState,
  on(loadTransactionSuccess,(state, action)=>{
    return{
      ...state,
      list:action.list,
      errorMessage: ''
    }
  }),
  on(loadTransactionFail,(state, action)=>{
    return{
      ...state,
      list:[],
      errorMessage: action.errorMessage
    }
  }),
)

export function TransactionReducer(state:any,action:any) {
  return _Transaction(state,action)
}
