import { CampaignInterface } from "@/interfaces/campaign.interface";
import {addDoc, collection, getDoc, getDocs, getFirestore, doc, updateDoc, deleteDoc} from "@firebase/firestore";
import app from "@/firebase/config";
const fireStore = getFirestore(app)

const campaignRef = collection(fireStore, 'campaigns')


export const getAllCampaigns = async (): Promise<any> => {
  const res =  await getDocs(campaignRef);
  return [...res.docs].map(item=> {
    return {...item.data(),id: item.id}
  });
};

export const createCampaignDocument = async (
  campaignData: CampaignInterface
): Promise<any> => {
  return await addDoc(campaignRef, campaignData);
};

export const getCampaignDocument = async (
  campaignId: string
): Promise<any> => {
  const docRef = doc(fireStore, 'campaigns', campaignId)
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data()
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
};

export const updateCampaignDocument = async (
  campaignId: string,
  campaignData: any
): Promise<any> => {
  const docRef = doc(fireStore, 'campaigns', campaignId)
  return await updateDoc(docRef, campaignData);
};

export const deleteCampaignDocument = async (
  campaignId: string
): Promise<any> => {
  const docRef = doc(fireStore, 'campaigns', campaignId)
  return deleteDoc(docRef);
};
