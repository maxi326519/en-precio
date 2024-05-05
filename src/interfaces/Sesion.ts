export interface Singup {
  name: string;
  surName: string;
  phone: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface SingupError {
  name: string;
  surName: string;
  phone: string;
  email: string;
  password: string;
  repeatPassword: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginError {
  email: string;
  password: string;
}

export const initSingup = (): Singup => ({
  name: "",
  surName: "",
  phone: "",
  email: "",
  password: "",
  repeatPassword: "",
});

export const initSingupError = (): SingupError => ({
  name: "",
  surName: "",
  phone: "",
  email: "",
  password: "",
  repeatPassword: "",
});

export const initLogin = (): Login => ({
  email: "",
  password: "",
});

export const initLoginError = (): LoginError => ({
  email: "",
  password: "",
});
