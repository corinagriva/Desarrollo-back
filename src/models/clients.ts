import {city} from './city';

export class Clients {
    dni: number 
    firstName: string
    lastName: string
    phone: number
    email: string
    password: string
    street: string
    streetNumber: number
    type: string[] = ['Minorista', 'Mayorista']
    city: city;

    constructor(dni: number, firstName: string, lastName: string, phone: number, email: string, password: string, street: string, streetNumber: number, type: string, city: city){
        this.dni = dni;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.street = street;
        this.streetNumber = streetNumber;
        this.type[''] = type;
        this.city = city
    }
}