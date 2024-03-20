import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../interfaces/ReduxState";
import {
  initUser,
  initUserError,
  User,
  UserError,
} from "../../interfaces/User";

import swal from "sweetalert";
import Input from "../../components/Inputs/Input";
import ImgInput from "../../components/ImgInput/ImgInput";

import styles from "./Profile.module.css";
import profileSvg from "../../assets/svg/profile.svg";
import Navbar from "../../components/Navbar/Navbar";

export default function Profile() {
  const user = useSelector((state: RootState) => state.user);
  const [userEdit, setUserEdit] = useState<User>(initUser());
  const [error, setError] = useState<UserError>(initUserError());
  const [edit, setEdit] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    setUserEdit(user);
  }, [user]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name !== "email") setUserEdit({ ...userEdit, [name]: value }); // Don't save the email
  };

  const handleEdit = () => {
    setEdit(!edit);
    setUserEdit(user);
    setFile(null);
  };

  const handleChangePassword = () => {
    // Redirect to change the password
  };

  const handleChangeEmail = () => {
    // Redirect to change the email
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (handelValidations()) {
      // Code to send data to update user
      console.log(file); // Upload file
      swal("Guardado", "Se editó tu usuario correctamente", "success");
      handleEdit();
    }
  };

  const handelValidations = () => {
    const errors: UserError = initUserError();
    let value = true;

    if (userEdit.name) {
      errors.name = "Debes completar este campo";
      value = false;
    }

    if (userEdit.photo) {
      errors.photo = "Debes completar este campo";
      value = false;
    }

    if (userEdit.phone) {
      errors.phone = "Debes completar este campo";
      value = false;
    }

    setError(error);
    return value;
  };

  return (
    <div className={styles.background}>
      <Navbar opaque={true} />
      <form className={styles.form}>
        <h2>Perfil</h2>
        <div className={styles.inputs}>
          <ImgInput defaultImg={profileSvg} edit={edit} setFile={setFile} />
          <Input
            name="name"
            label="Nombre"
            value={user.name}
            error={error.name}
            onChange={handleChange}
            disabled={!edit}
          />
          <Input
            name="phone"
            label="Telefono"
            value={user.phone}
            error={error.phone}
            onChange={handleChange}
            disabled={!edit}
          />
          <Input
            name="email"
            label="Correo"
            value={user.email}
            error={error.email}
            onChange={handleChange}
            disabled={true}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleChangePassword}
          >
            Cambiar contraseña
          </button>
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleChangeEmail}
          >
            Cambiar correo
          </button>
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
