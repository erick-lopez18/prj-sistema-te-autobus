import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCEy-E-PYq1-gvf7pVQRmcrg5WUz35WlRs",
    authDomain: "te-bus-41f24.firebaseapp.com",
    projectId: "te-bus-41f24",
    storageBucket: "te-bus-41f24.appspot.com",
    messagingSenderId: "873600622416",
    appId: "1:873600622416:web:4f664b981b4cbbe97e5655"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  export { app, auth, firestore };