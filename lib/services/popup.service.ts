
import { PopupInterface } from "@/interfaces/popup.interface";
import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, updateDoc} from "@firebase/firestore";
import app from "@/firebase/config";
const fireStore = getFirestore(app)

const collectionName = 'popups';
const popupRef = collection(fireStore, collectionName)

export const getAllLibraryTemplates = async () => {
  const res = await getDocs(popupRef);
  return [...res.docs].map(item => {
    return {...item.data(), id: item.id}
  });
}
export const createPopup = async (popup: PopupInterface) => {
  return await addDoc(popupRef, popup);
};

export const getPopupDocuemnt = async (popupId: string) => {
  const docRef = doc(fireStore, collectionName, popupId)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const updatePopupDocument = async (popupId: string, popup: any) => {
  const docRef = doc(fireStore, collectionName, popupId)
  return await updateDoc(docRef, popup);
};

export const deletePopupDocument = async (popupId: string) => {
  const docRef = doc(fireStore, collectionName, popupId)
  return deleteDoc(docRef);
};
