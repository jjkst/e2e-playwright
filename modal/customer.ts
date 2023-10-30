import { Address } from "./address.ts";

export class Customer {
    public Firstname!: string;
    public Lastname!: string;
    public Address!: Address;
    public PhoneNum!: string;
    public SSN!: string;
    public Username!: string;
    public Password!: string;

    public setDefaultValues() {
        this.Firstname = 'Test';
        this.Lastname = 'Member';
        this.Address = {
            Street: '1 N Main Street',
            City: 'Richmond',
            State: 'VA',
            Zipcode: '23060'
        };
        this.PhoneNum = '8042334565';
        this.SSN = '568956655';
        this.Username = 'tmember';
        this.Password = 'tpassword';
    }
}

