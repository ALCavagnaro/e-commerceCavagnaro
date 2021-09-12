// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {
    collection,
    setDoc,
    addDoc, 
    getDocs, 
    getDoc, 
    query, 
    where, 
    doc,
    runTransaction,
    writeBach
} from "firebase/firestore";
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtOYf3ahEDH8BFkQNdmOEYmwuLTbiOhX4",
  authDomain: "e-commerce-coder-house-9e357.firebaseapp.com",
  projectId: "e-commerce-coder-house-9e357",
  storageBucket: "e-commerce-coder-house-9e357.appspot.com",
  messagingSenderId: "127376930075",
  appId: "1:127376930075:web:1ce140397cb939496a0fbe"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();

export const completeItemList = () => {
    const query = getDocs(collection(db,'Indumentaria'))
    return query
}

export const itemCat = (category) => {
    const q = collection(db,'Indumentaria')
    const q2 = query(q, where('category', '==', category))
    const q3 = getDocs(q2)
    return q3
}

export const itemId = (id) => {
    const q = doc(db,'Indumentaria', id)
    const q2 = getDoc(q)
    return q2
}

export  const addPaymentOrder = (path, obj) => {

    const pathSegments = path.split('/');
    const ref = collection(db,...pathSegments);
    console.log(path)
    return addDoc(ref, obj);    
}







