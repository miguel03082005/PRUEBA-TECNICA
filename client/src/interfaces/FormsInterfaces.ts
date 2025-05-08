export type FormData = {
    monto:string;
    tipo:string;
    categoria:string;
    descripcion:string
}


export interface Transaction {
    id: number;
    fecha: string;
    tipo: string;
    monto: number;
    categoria: string;
    descripcion: string;
}
