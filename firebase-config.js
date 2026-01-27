import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { 
    getAuth, 
    signInAnonymously, 
    onAuthStateChanged, 
    signInWithCustomToken,
    GoogleAuthProvider,
    signInWithRedirect,
    getRedirectResult,
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { 
    getFirestore, 
    doc, 
    setDoc, 
    getDoc, 
    collection, 
    getDocs, 
    query, 
    deleteDoc,
    where 
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// FIREBASE CONFIGURATION
// We keep the same project configuration so you don't need a new Google Cloud setup.
const firebaseConfig = {
  apiKey: "AIzaSyB8qLWOiC3csqPnucbj3XOtireOgPjjL_k",
  authDomain: "v20-character-creator.firebaseapp.com",
  projectId: "v20-character-creator",
  storageBucket: "v20-character-creator.firebasestorage.app",
  messagingSenderId: "110220382386",
  appId: "1:110220382386:web:81b5d203c2bc4f81f5b9ab",
  measurementId: "G-RWPX9139HB"
};

// INITIALIZE APP
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// --- CHANGED FOR REVISED EDITION ---
// This unique ID ensures data for this app is stored separately from the V20 app.
const appId = 'vtm-revised-sheet'; 

const googleProvider = new GoogleAuthProvider();

// EXPORT SERVICES AND FUNCTIONS
export { 
    app, 
    auth, 
    db, 
    appId,
    signInAnonymously, 
    onAuthStateChanged, 
    signInWithCustomToken, 
    signInWithRedirect,
    getRedirectResult,
    signOut,
    googleProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    
    // FIRESTORE FUNCTIONS
    doc, 
    setDoc, 
    getDoc, 
    collection, 
    getDocs, 
    query, 
    deleteDoc,
    where
};
