import { createAction, props } from "@ngrx/store";
import { CreateTransaction, GetTransaction } from "../Models/getTransaction";
import { Login } from "../Models/Login";
import { Register } from "../Models/Register";

export const Load_Transaction = "[transaction] transaction load";
export const Load_Transaction_Success = "[transaction] transaction load success";
export const Load_Transaction_Fail = "[transaction] transaction load fail";

//Fetch data
export const loadTransaction = createAction(
  Load_Transaction
);
export const loadTransactionSuccess = createAction(
  Load_Transaction_Success,
  props<{list:GetTransaction[]}>()
);
export const loadTransactionFail = createAction(
  Load_Transaction_Fail,
  props<{errorMessage:string}>()
);

//Create data
export const Load_Create_Transaction = "[create] create data";
export const Load_Create_Transaction_Success = "[create] create data success";

export const loadCreateTransaction = createAction(
  Load_Create_Transaction,
  props<{create: CreateTransaction}>()
);
export const loadCreateTransactionSuccess = createAction(
  Load_Create_Transaction_Success
);

//Update Data
export const Load_Update_Transaction = "[update] update data";
export const Load_Update_Transaction_Success = "[update] update data success";

export const loadUpdateTransaction = createAction(
  Load_Update_Transaction,
  props<{update: CreateTransaction, id: string}>()
);
export const loadUpdateTransactionSuccess = createAction(
  Load_Update_Transaction_Success
);

//Delete data
export const Load_Delete_Transaction = "[delete] delete data";
export const Load_Delete_Transaction_Success = "[delete] delete data success";

export const loadDeleteTransaction = createAction(
  Load_Delete_Transaction,
  props<{
    deleteId: string}>()
);
export const loadDeleteTransactionSuccess = createAction(
  Load_Delete_Transaction_Success
);

//Login users
export const Login_User = "[login] login user";
export const Login_User_Success = "[login] login user success";

export const loadLogin = createAction(
  Login_User,
  props<{login: Login}>()
);
export const loadLoginSuccess = createAction(
  Login_User_Success
);

//Register users
export const Register_User = "[register] register user";
export const Register_User_Success = "[register] register user success";

export const loadRegister = createAction(
  Register_User,
  props<{register: Register}>()
);
export const loadRegisterSuccess = createAction(
  Register_User_Success
);

//SignOut users
export const Logout_User = "[logout] logout user";
export const Logout_User_Success = "[logout] logout user success";

export const loadLogout = createAction(
  Logout_User,
  props<{logout: string}>
);
export const loadLogoutSuccess = createAction(
  Logout_User_Success
);

export const Load_Alert = "[alert] load alert";

export const loadAlert = createAction(
  Load_Alert,
  props<{message: string, status: string}>()
);

export const emptyAction = createAction('emptyAction');

export const Save_Token = '[Auth/API] Save Token to Session Storage';

export const saveTokenToStorage = createAction(
  Save_Token,
  props<{ token: string }>()
);
