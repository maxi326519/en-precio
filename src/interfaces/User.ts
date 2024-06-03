export interface User {
  id?: string;
  name: string;
  surName: string;
  email: string;
  photo?: string;
  phone?: string;
  companyId?: string;
}

export interface UserError {
  name: string;
  email: string;
  photo: string;
  phone: string;
}

export const initUser = (): User => ({
  name: "",
  surName: "",
  email: "",
  photo: "",
  phone: "",
});

export const initUserError = (): UserError => ({
  name: "",
  email: "",
  photo: "",
  phone: "",
});
