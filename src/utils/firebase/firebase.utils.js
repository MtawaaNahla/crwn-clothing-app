import { initializeApp } from "firebase/app";
import {
    getAuth ,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    getMultiFactorResolver,
} from 'firebase/auth' ;

import {
    getFirestore,
    doc, 
    getDoc,
    setDoc
} from 'firebase/firestore' ;


const firebaseConfig = {
    apiKey: "AIzaSyB3K9iJhqIWMI6_dM6GJDP-VCKGtTBTN3E",
    authDomain: "crwn-clothing-db-2b807.firebaseapp.com",
    projectId: "crwn-clothing-db-2b807",
    storageBucket: "crwn-clothing-db-2b807.firebasestorage.app",
    messagingSenderId: "185687323896",
    appId: "1:185687323896:web:b8866e72e81f0f15a5370d"
  };
  
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
     const userDocRef = doc(db, 'users',userAuth.uid );

     const userSnapshot = await getDoc(userDocRef);

     if(!userSnapshot.exixts()){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef , {
                displayName,
                email,
                createAt
        });
        } catch (error) {
            console.log('error creating the user', error.mrssage);
        }
    }
    return userDocRef;
  };
