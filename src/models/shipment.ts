export class shipment {
    cuit: number 
    businessName: string
    phone: number
    address: string 

    constructor(cuit: number, businessName: string, phone: number, address: string){
        this.cuit = cuit;
        this.businessName = businessName;
        this.phone = phone;
        this.address = address;
    }
}