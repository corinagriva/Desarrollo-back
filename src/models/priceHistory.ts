export class PriceHistory {
    dataSince: number 
    price: number

    constructor(dataSince: number, price: number){
        this.dataSince = dataSince;
        this.price = price;
    }
}