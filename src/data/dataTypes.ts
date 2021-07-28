export interface IData {
  work: IWork;
  client: IClient;
  invoiceDetails: IInvoiceDetails;
  ownDetails: IOwnDetails;
}

export interface IWork {
  hours: number;
  rate: number;
  currency: string;
}

export interface IClient {
  name: string;
  address: IAddress;
}

export interface IInvoiceDetails {
  date: string;
  invoiceNr: string;
}

export interface IOwnDetails {
  name: string;
  fullName: string;
  address: IAddress;
}

export interface IAddress {
  line1: string;
  line2: string;
  country: string;
  postcode: string;
}
