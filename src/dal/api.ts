import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://reqres.in/api/',
})
//api
export const API = {
    getEmployees() {
        return instance.get<ResponseType>('users?per_page=12')
    }
}
//types
export type ResponseType = {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: DataType[]
}
export type DataType = {
    id: number | string
    email: string
    first_name: string
    last_name: string
    avatar?: string
}