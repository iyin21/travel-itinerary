import { AxiosError } from "axios"

export type Error = AxiosError<{ message: string }>
export interface APIResponse<T> {
    status: string
    message: string
    timestamp: number
    data: T
}