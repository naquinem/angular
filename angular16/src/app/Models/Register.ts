export interface Register{
  fullname: string
  id_number: string
  email: string
  password: string
  password_confirmation: string
}

export interface RegisterModel{
  register: Register[]
  errorMessage: string
}
