export interface Login{
  email: string
  password: string
}

export interface LoginModel{
  login: Login[]
  errorMessage: string
}
