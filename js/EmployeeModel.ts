export enum Role { Trainee, QA, Devops, Developer };

export class Employee 
{
    firstName: string;
    middleName: string;
    lastName: string;
    email: string;
    phone: number;
    role: Role;
    address: string;
}