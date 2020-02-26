import { Employee } from "./EmployeeModel.js"
import { FetchData } from "./interfaces.js"

export class FetchLogic implements FetchData<Employee>
{
    async fetchFunction(): Promise<Employee[]> 
    {
        const response = await fetch("http://localhost:3000/api/getdata");
        return await response.json();
    }
}