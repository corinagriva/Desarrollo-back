import {clients} from './clients';

export class order {
    orderNumber: number 
    date: number 
    clients: clients;

    constructor(orderNumber: number, date: number, clients: clients){
        this.orderNumber = orderNumber;
        this.date = date;
        this.clients = clients;
    }
}