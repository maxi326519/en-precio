import {
  collection,
  doc,
  getDoc,
  updateDoc,
  writeBatch,
} from "firebase/firestore";
import { AppDispatch } from "../../../interfaces/ReduxState";
import { Company } from "../../../interfaces/Company";
import { db /* storage */ } from "../../../firebase";
import { User } from "../../../interfaces/User";
//import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export const CREATE_COMPANY = "CREATE_COMPANY";
export const GET_COMPANY = "GET_COMPANY";
export const UPDATE_COMPANY = "UPDATE_COMPANY";
export const DELETE_COMPANY = "DELETE_COMPANY";

const companyColl = collection(db, "Companies");

export function setCompany(user: User, company: Company, photo?: File) {
  return async (dispatch: AppDispatch) => {
    try {
      // Create doc
      const newCompanyDoc = doc(companyColl);

      // Save photo
      const photoImg = "";
      console.log(photo);
      //if (photo) {
      //  const storageRef = ref(storage, `Companies/${newCompanyDoc.id}`);
      //  await uploadBytes(storageRef, photo);
      //  photoImg = await getDownloadURL(storageRef, );
      //}

      // Create company and add id to user
      const batch = writeBatch(db);
      batch.set(newCompanyDoc, {
        ...company,
        id: newCompanyDoc.id,
        photo: photoImg,
      });
      batch.update(doc(collection(db, "Users"), user.id), {
        ...user,
        companyId: newCompanyDoc.id,
      });
      await batch.commit();

      dispatch({
        type: CREATE_COMPANY,
        payload: company,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}

export function getCompany(companyId: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const snapshot = await getDoc(doc(companyColl, companyId));
      if (!snapshot.exists()) throw new Error("Company not found");
      const company = snapshot.data();

      dispatch({
        type: GET_COMPANY,
        payload: company,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}

export function updateCompany(company: Company) {
  return async (dispatch: AppDispatch) => {
    try {
      await updateDoc(doc(companyColl, company.id), { ...company });

      dispatch({
        type: UPDATE_COMPANY,
        payload: company,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}

export function deleteCompany(company: Company) {
  return async (dispatch: AppDispatch) => {
    try {
      // Update company to disabled
      await updateDoc(doc(companyColl, company.id), {
        ...company,
        enabled: false,
      });

      dispatch({
        type: DELETE_COMPANY,
        payload: company.id,
      });
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(e.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
  };
}
