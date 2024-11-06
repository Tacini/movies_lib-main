// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCI_yya-anAqSwXsYHA6Y96Zv1spuXNbNw",
    authDomain: "movielibs-32ce8.firebaseapp.com",
    projectId: "movielibs-32ce8",
    storageBucket: "movielibs-32ce8.firebasestorage.app",
    messagingSenderId: "56325075482",
    appId: "1:56325075482:web:1e027b9a48de14fdca57a3"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
