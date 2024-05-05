import { closeLoading, openLoading } from "../../redux/actions/loading";
import { Login, Singup } from "../../interfaces/Sesion";
import { logIn, logOut, signUp } from "../../redux/actions/sesion";
import { useDispatch } from "../../interfaces/ReduxState";
import swal from "sweetalert";

interface UseSesion {
  login: (userData: Login) => Promise<void>;
  signup: (userData: Singup) => Promise<void>;
  logout: () => Promise<void>;
}

function useSesion(): UseSesion {
  const dispatch = useDispatch();

  async function signup(userData: Singup): Promise<void> {
    dispatch(openLoading());
    return dispatch(signUp(userData))
      .then(() => {
        dispatch(closeLoading());
      })
      .catch((e: Error) => {
        dispatch(closeLoading());
        throw new Error(e.message);
      });
  }

  async function login(userData: Login): Promise<void> {
    dispatch(openLoading());
    return dispatch(logIn(userData))
      .then(() => {
        dispatch(closeLoading());
      })
      .catch((e: Error) => {
        console.log(e);
        dispatch(closeLoading());
        throw new Error(e.message);
      });
  }

  async function logout(): Promise<void> {
    await swal({
      text: "¿Seguro que desea cerrar sesion?",
      buttons: {
        Aceptar: true,
        Cancelar: true,
      },
    }).then(async (response: string) => {
      if (response === "Aceptar") {
        dispatch(openLoading());
        await dispatch(logOut())
          .then(() => {
            dispatch(closeLoading());
          })
          .catch((e: Error) => {
            dispatch(closeLoading());
            console.log(e.message);
            swal(
              "Error",
              "Hubo un error desconocido al cerrar sesión",
              "error"
            );
          });
      }
    });
  }

  return {
    signup: signup,
    login: login,
    logout: logout,
  };
}

export default useSesion;
