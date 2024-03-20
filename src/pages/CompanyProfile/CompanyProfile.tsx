import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/ReduxState";
import {
  initCompany,
  initCompanyError,
  Company,
  CompanyError,
} from "../../interfaces/Company";

import swal from "sweetalert";
import Input from "../../components/Inputs/Input";
import Navbar from "../../components/Navbar/Navbar";
import ImgInput from "../../components/ImgInput/ImgInput";

import styles from "./CompanyProfile.module.css";
import logoSvg from "../../assets/svg/logo.svg";

export default function CompanyProfile() {
  const company = useSelector((state: RootState) => state.company);
  const [companyEdit, setCompanyEdit] = useState<Company>(initCompany());
  const [error, setError] = useState<CompanyError>(initCompanyError());
  const [edit, setEdit] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    setCompanyEdit(company);
  }, [company]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name !== "email") setCompanyEdit({ ...companyEdit, [name]: value }); // Don't save the email
  };

  const handleEdit = () => {
    setEdit(!edit);
    setCompanyEdit(company);
    setFile(null);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (handelValidations()) {
      // Code to send data to update company
      console.log(file); // Upload file
      swal("Guardado", "Se editó tu usuario correctamente", "success");
      handleEdit();
    }
  };

  const handelValidations = () => {
    const errors: CompanyError = initCompanyError();
    let value = true;

    if (companyEdit.name) {
      errors.name = "Debes completar este campo";
      value = false;
    }

    if (companyEdit.photo) {
      errors.photo = "Debes completar este campo";
      value = false;
    }

    if (companyEdit.adress) {
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
            value={company.name}
            error={error.name}
            onChange={handleChange}
            disabled={!edit}
          />
          <Input
            name="phone"
            label="Telefono"
            value={company.phone}
            error={error.phone}
            onChange={handleChange}
            disabled={!edit}
          />
          <Input
            name="adress"
            label="Direccion"
            value={company.adress}
            error={error.adress}
            onChange={handleChange}
            disabled={!edit}
          />
          <Input
            name="email"
            label="Correo"
            value={company.email}
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
              onClick={handleEdit}
            >
              Cancelar
            </button>
          </div>
        ) : (
          <div className={styles.btnContainer}>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleEdit}
            >
              Editar
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
