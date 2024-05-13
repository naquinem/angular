import { LoginModel } from "../Models/Login";
import { RegisterModel } from "../Models/Register";
import { GetTransactionModel } from "../Models/getTransaction";

export const transactionState:GetTransactionModel = {
  list: [],
  errorMessage: '',
  editData: [],
}

export const loginState:LoginModel = {
  login: [],
  errorMessage: ''
}

export const registerState:RegisterModel = {
  register: [],
  errorMessage: ''
}
