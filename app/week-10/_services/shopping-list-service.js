import { db } from "../_utils/firebase.js";
import {
  doc,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

export async function getItems(userId) {
  try {
    const items = [];
    const itemsCollectionRef = collection(db, `users/${userId}/items`);
    const itemsCollectionSnapshot = await getDocs(itemsCollectionRef);
    itemsCollectionSnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items;
  } catch (error) {
    console.log("Error getting items:", error);
    return [];
  }
}

export async function addItem(userId, item) {
  try {
    const itemsCollectionRef = collection(db, `users/${userId}/items`);
    const itemsCollectionSnapshot = await addDoc(itemsCollectionRef, item);
    return itemsCollectionSnapshot.id;
  } catch (error) {
    console.log("Error adding item:", error);
    return null;
  }
}

export async function deleteItem(userId, itemId) {
  try {
    const itemDocRef = doc(db, `users/${userId}/items`, itemId);
    await deleteDoc(itemDocRef);
  } catch (error) {
    console.log("Error deleting item:", error);
  }
}
