export interface IData {
  title: string;
  work: IWork[];
  config?: IConfig;
  client: IClient;
  invoiceDetails: IInvoiceDetails;
  ownDetails: IOwnDetails;
  bankDetails: IBankDetails;
}

export interface IWork {
  hours: number;
  rate: number;
  currency: string;
  description: string;
  unit?: string;
}

export interface IClient {
  name: string;
  address: IAddress;
}

export interface IInvoiceDetails {
  date: string;
  supplyDate: string;
  invoiceNr: string;
}

export interface IOwnDetails {
  name: string;
  fullName: string;
  address: IAddress;
  tel: string;
  email: string;
  homepage: string;
  steuerId: string;
}

export interface IAddress {
  line1: string;
  line2: string;
  country: string;
  postcode: string;
}

export interface IBankDetails {
  inhaber: string;
  IBAN: string;
  BIC: string;
  bank: string;
}

export interface IConfig {
  unitHeader: string;
  showUnitNumber: boolean;
}
