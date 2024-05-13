
export interface GetTransaction {
  id: string
  logistics: string
  serial_number: string
  control_number: string
  ecn: string
}
export interface UpdateTransaction {
  logistics: string
  serial_number: string
  control_number: string
  ecn: string
}

export interface CreateTransaction {
  logistics: string
  serial_number: string
  control_number: string
  ecn: string
}

export interface GetTransactionModel {
  list:GetTransaction[],
  errorMessage: string,
  editData: UpdateTransaction[],
}
