import axios from "axios"
import type { FormData } from "../interfaces/FormsInterfaces"

const trasaction = axios.create({
    baseURL:'http://127.0.0.1:8000/api-auth/api/transacciones/',
})


export const GetTransactions = () => trasaction.get('')

export const SaveFile = (data:FormData) => trasaction.post('', data)