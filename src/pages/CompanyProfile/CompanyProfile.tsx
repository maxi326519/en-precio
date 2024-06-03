import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/ReduxState";
import {
  initCompany,
  initCompanyError,
  Company,
  CompanyError,
} from "../../interfaces/Company";
import useCompany from "../../hooks/useCompany";

import Input from "../../components/Inputs/Input";
import Navbar from "../../components/Navbar/Navbar";
import ImgInput from "../../components/ImgInput/ImgInput";

import styles from "./CompanyProfile.module.css";
import logoSvg from "../../assets/svg/logo.svg";

export default function CompanyProfile() {
  const redirect = useNavigate();
  const company = useCompany();
  const user = useSelector((state: RootState) => state.user);
  const [companyData, setCompanyEdit] = useState<Company>(initCompany());
  const [error, setError] = useState<CompanyError>(initCompanyError());
  const [edit, setEdit] = useState<boolean>(false);
  const [file, setFile] = useState<File | undefined>();

  // Set data to edit
  useEffect(() => {
    setCompanyEdit(company.data);
  }, [company.data]);

  // Set edit in true to enable input to create a new Company
  useEffect(() => {
    setEdit(!user.companyId);
  }, [user]);

  // useEffect(() => {
  //   console.log(companyData);
  // }, [companyData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCompanyEdit({ ...companyData, [name]: value });
  };

  const handleToggleEdit = () => {
    if (user.companyId) {
      // If company already exist, enable inputs
      setEdit(!edit);
      setCompanyEdit(company.data);
      setFile(undefined);
    } else {
      // If don't exist, redirect to landing
      redirect("/");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (handelValidations()) {
      await company.set(companyData, file);
      handleToggleEdit();
    }
  };

  const handelValidations = () => {
    const errors: CompanyError = initCompanyError();
    let value = true;

    if (companyData.name === "") {
      errors.name = "Debes completar este campo";
      value = false;
    }

    if (companyData.adress === "") {
      errors.adress = "Debes completar este campo";
      value = false;
    }

    setError(error);
    return value;
  };

  return (
    <div className={styles.background}>
      <Navbar opaque={true} />
      <form className={styles.form}>
        <h2>Perfil Inmobiliario</h2>
        <div className={styles.inputs}>
          <ImgInput defaultImg={logoSvg} edit={edit} setFile={setFile} />
          <Input
            name="name"
            label="Nombre"
            value={companyData.name}
            error={error.name}
            onChange={handleChange}
            disabled={!edit}
          />
          <Input
            name="phone"
            label="Telefono"
            value={companyData.phone}
            error={error.phone}
            onChange={handleChange}
            disabled={!edit}
          />
          <Input
            name="adress"
            label="Direccion"
            value={companyData.adress}
            error={error.adress}
            onChange={handleChange}
            disabled={!edit}
          />
          <Input
            name="email"
            label="Correo"
            value={companyData.email}
            error={error.email}
            onChange={handleChange}
            disabled={!edit}
          />
        </div>
        {edit ? (
          <div className={styles.btnContainer}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              Guardar
            </button>
            <button
              className="btn btn-outline-primary"
              type="button"
              onClick={handleToggleEdit}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <div className={styles.btnContainer}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleToggleEdit}
            >
              {user.companyId ? "Editar" : "Crear"}
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
