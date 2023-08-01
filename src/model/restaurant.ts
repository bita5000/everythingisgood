export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[];
};

export type Address = {
    city: string;
    detail: string;
    zipCode: number;
};

export interface Menu {
    name: string;
    price: number;
    category: string;
}
