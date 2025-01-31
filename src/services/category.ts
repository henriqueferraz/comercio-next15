import { Category } from '../models/category';
import { db } from '../config/firebase';
import { collection, getDocs, addDoc, doc, deleteDoc, updateDoc } from 'firebase/firestore';

const categoryCollection = collection(db, 'categories');

export const getCategories = async (): Promise<Category[]> => {
  const snapshot = await getDocs(categoryCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Category));
};

export const addCategory = async (category: Omit<Category, 'id'>): Promise<string> => {
  const docRef = await addDoc(categoryCollection, category);
  return docRef.id;
};

export const updateCategory = async (id: string, category: Partial<Category>): Promise<void> => {
  const docRef = doc(db, 'categories', id);
  await updateDoc(docRef, category);
};

export const deleteCategory = async (id: string): Promise<void> => {
  const docRef = doc(db, 'categories', id);
  await deleteDoc(docRef);
};
