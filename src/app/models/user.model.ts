import { AddressModel } from './address.model';

export class UserModel {
    id: string;
    givenName: string;
    genderId: string;
    birthDate: string;
    address: AddressModel;

    /**
     * Constructor
     *
    */
    constructor() 
    {
        this.id = ''
        this.givenName = '';
        this.genderId = "";
        this.birthDate = '';
        this.address = new AddressModel()
    }
}