export interface Customer {
    id: number;
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    companyName: string;
  }