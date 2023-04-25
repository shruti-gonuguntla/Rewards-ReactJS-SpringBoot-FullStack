export interface Column {
    id: string;
    title: string;
}

export interface CellValue {
    column: string;
    value: string | number;
}

export interface CustRewards {
    id: number;
    customerName: string;
    rewardPoints: number;
}
export interface Customer {
    id: number;
    name: string;
}

export interface Transaction {
    id: string;
    description: string;
    price:number;
    dateTime:string;
    month?:number;
    points?:number;
}