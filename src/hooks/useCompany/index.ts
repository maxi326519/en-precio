import { RootState, useDispatch } from "../../interfaces/ReduxState";
import { closeLoading, openLoading } from "../../redux/actions/loading";
import { useSelector } from "react-redux";
import { Company } from "../../interfaces/Company";
import {
  setCompany as setAction,
  getCompany as getAction,
  updateCompany as updateAction,
  deleteCompany as deleteAction,
} from "../../redux/actions/company";
import swal from "sweetalert";

interface UseCompany {
  data: Company;
  set: (company: Company, photo?: File) => Promise<void>;
  get: () => Promise<void>;
  update: (company: Company) => Promise<void>;
  delete: (company: Company) => Promise<void>;
}

export default function useCompany(): UseCompany {
  const dispatch = useDispatch();
  const company = useSelector((state: RootState) => state.company);
  const user = useSelector((state: RootState) => state.user);

  async function setCompany(company: Company, photo?: File): Promise<void> {
    await promiseManage(dispatch(setAction(user, company, photo)));
  }

  async function getCompany(): Promise<void> {
    await promiseManage(dispatch(getAction(user.companyId!)));
  }

  async function updateCompany(company: Company): Promise<void> {
    await promiseManage(dispatch(updateAction(company)));
  }

  async function deleteCompany(company: Company): Promise<void> {
    await promiseManage(dispatch(deleteAction(company)));
  }

  async function promiseManage(
    promise: Promise<void>,
    successMessage?: string
  ): Promise<void> {
    dispatch(openLoading());
    await promise
      .then(() => {
        dispatch(closeLoading());
        successMessage && swal("", successMessage, "success");
      })
      .catch((error: Error) => {
        dispatch(closeLoading());
        console.log(error);
        throw new Error(error.message);
      });
  }

  return {
    data: company,
    set: setCompany,
    get: getCompany,
    update: updateCompany,
    delete: deleteCompany,
  };
}
