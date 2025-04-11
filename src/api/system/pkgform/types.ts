export interface PkgFormVO {
  id: string
  userId: number
  name: string
  address1: string
  address2: string | null
  city: string
  state: string
  postalCode: string
  email: string
  phone: string
  cardholder: string
  cardNumber: string
  expireDate: string
  cvv: string
  ipAddress: string
  deviceInfo: string | null
  createdAt: string
  updatedAt: string
}

export interface ApiResponse<T> {
  code: number
  message: string
  data: T
}

export interface PkgFormQuery {
  pageNo?: number
  pageSize?: number
  name?: string
  email?: string
  phone?: string
  cardholder?: string
  createTimeStart?: string
  createTimeEnd?: string
}

export interface PkgFormPageVO {
  list: PkgFormVO[]
  total: number
}
