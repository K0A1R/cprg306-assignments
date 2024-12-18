import { db } from "../_utils/firebase.js";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  try {
    const items = [];
    const itemsRef = collection(db, `users/${userId}/items`);
    const itemsSnapshot = await getDocs(itemsRef);
    itemsSnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.error(error);
  }
};

export const addItem = async (userId, item) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error(error);
  }
};

export const deleteItem = async (userId, itemId) => {
  try {
    const itemsRef = collection(db, `users/${userId}/items`);
    await deleteDoc(itemsRef, itemId);
  } catch (error) {
    console.error(error);
  }
};
