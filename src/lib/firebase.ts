import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VIKE_PUBLIC_FIRESTORE_API_KEY,
  authDomain: import.meta.env.VIKE_PUBLIC_FIRESTORE_AUTH_DOMAIN,
  projectId: import.meta.env.VIKE_PUBLIC_FIRESTORE_PROJECT_ID,
  storageBucket: import.meta.env.VIKE_PUBLIC_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VIKE_PUBLIC_FIRESTORE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VIKE_PUBLIC_FIRESTORE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// データベース初期化
const db = getFirestore(app);

export default db;