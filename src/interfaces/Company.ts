export interface Company {
  id?: string;
  name: string;
  email: string;
  phone: string;
  adress: string;
  photo: string;
  owners: string[];
  employees: string[];
  enabled: boolean;
}

export interface CompanyError {
  name: string;
  email: string;
  phone: string;
  adress: string;
  photo: string;
  owners: string;
  employees: string;
}

export const initCompany = (): Company => ({
  name: "",
  email: "",
  phone: "",
  adress: "",
  photo: "",
  owners: [],
  employees: [],
  enabled: true,
});

export const initCompanyError = (): CompanyError => ({
  name: "",
  email: "",
  phone: "",
  adress: "",
  photo: "",
  owners: "",
  employees: "",
});
