export interface Company {
  id?: string;
  photo: string;
  adress: string;
  owners: string[];
  employees: string[];
}

export const initCompany = (): Company => ({
  photo: "",
  adress: "",
  owners: [],
  employees: [],
});
