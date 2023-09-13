export class City {
    postCode: string 
    name: string
    cuit: number
    code: number

    constructor(postCode: string, name: string, cuit: number, code: number){
        this.postCode = postCode;
        this.name = name;
        this. cuit = cuit;
        this.code = code;
    }
}