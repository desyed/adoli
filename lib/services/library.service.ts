import {addDoc, collection, getDoc, getDocs, getFirestore, doc, updateDoc, deleteDoc} from "@firebase/firestore";
import app from "@/firebase/config";
const fireStore = getFirestore(app)

const libraryRef = collection(fireStore, 'library')

export const getAllLibraryTemplates = async () => {
  const libs =  await getDocs(libraryRef);
  return [...libs.docs].map(item=> {
    return {...item.data(), id: item.id}
  });
};
