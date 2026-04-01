/* ============================================
   FIREBASE CONFIGURATION
   ============================================ */

// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, deleteDoc, doc, setDoc, getDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getBytes } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-storage.js";
import { getDatabase, ref as dbRef, push, set, get, update, remove } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxo07mtbi6lk2lFo3QsOdtDDvGHs7IGbM",
  authDomain: "examweb-ad399.firebaseapp.com",
  databaseURL: "https://examweb-ad399-default-rtdb.firebaseio.com",
  projectId: "examweb-ad399",
  storageBucket: "examweb-ad399.firebasestorage.app",
  messagingSenderId: "966823179375",
  appId: "1:966823179375:web:10152086d508691117899a",
  measurementId: "G-6TNL0QR18W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const realtimeDb = getDatabase(app);

// Enable persistence
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});

console.log("Firebase initialized successfully!");

export { 
  auth, 
  db, 
  storage,
  realtimeDb,
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  collection, 
  addDoc, 
  getDocs, 
  query, 
  where, 
  updateDoc, 
  deleteDoc, 
  doc, 
  setDoc, 
  getDoc,
  serverTimestamp,
  ref,
  uploadBytes,
  getBytes,
  dbRef,
  push,
  set,
  get,
  update,
  remove
};
