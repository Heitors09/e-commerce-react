import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD4nTHnJW4Mh5SrPmUdg3BIJ5zH4zj7kOc",
  authDomain: "e-commerce-log-in-ce2df.firebaseapp.com",
  databaseURL: "https://e-commerce-log-in-ce2df-default-rtdb.firebaseio.com",
  projectId: "e-commerce-log-in-ce2df",
  storageBucket: "e-commerce-log-in-ce2df.appspot.com",
  messagingSenderId: "691579438736",
  appId: "1:691579438736:web:ca02ffddede6cb46483a15",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
