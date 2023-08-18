"use client";

import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "@/firebase/config";
import {uploadBytes} from "@firebase/storage";

export const getImageUrl = (path: string) => getDownloadURL(ref(storage, path));

export const uploadImage = async (file: File) => {
    const imageRef = ref(storage, `images/${Date.now()}-${file.name}`);
    const uploadResult = await uploadBytes(imageRef, file);
    return uploadResult?.ref?.fullPath
}
