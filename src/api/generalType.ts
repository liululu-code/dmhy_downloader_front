export interface GeneralResponse<T> {
  code: number
  data: T
  message: string
}
