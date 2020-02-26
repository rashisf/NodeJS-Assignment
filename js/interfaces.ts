import { Operations } from "./BasicOperations";
import {Employee} from "./EmployeeModel";

export interface FetchData<T>
{
    fetchFunction(): Promise<T[]>;
}

export interface Creation<T>
{
    create(obj: T[]): void;
    displayTable(obj: T[]): void;
    addEmployee(row: HTMLTableRowElement,obj: T): void;
}

export interface CRUD<T>
{
    editRow(rowId: T): void;
    deleteRow(rowId: T): void;
    saveRow(rowId: T): void;
    cancelRow(rowId: T): void;
}


export interface ButtonPresentation<T>
{
    createButton(row: HTMLTableRowElement,rowId: T, obj: Operations): void;
    fetchButton(rowId: T, obj: Operations): void;
}


export interface Validation<T>
{
    validateFields(obj: T): void;
}
