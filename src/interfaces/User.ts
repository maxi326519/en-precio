export interface User {
  id?: string;
  name: string;
  email: string;
  photo: string;
  phone: string;
}

export interface UserError {
  name: string;
  email: string;
  photo: string;
  phone: string;
}

export const initUser = (): User => ({
  name: "",
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
