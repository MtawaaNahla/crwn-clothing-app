import { initializeApp } from "firebase/app";
import {
    getAuth ,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth' ;

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore' ;


const firebaseConfig = {
    apiKey: "AIzaSyB3K9iJhqIWMI6_dM6GJDP-VCKGtTBTN3E",
    authDomain: "crwn-clothing-db-2b807.firebaseapp.com",
    projectId: "crwn-clothing-db-2b807",
    storageBucket: "crwn-clothing-db-2b807.firebasestorage.app",
    messagingSenderId: "185687323896",
    appId: "1:185687323896:web:b8866e72e81f0f15a5370d"
  };
  
  
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect =() => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
  ) => {
    if(!userAuth)  return;

     const userDocRef = doc(db, 'users',userAuth.uid );

     const userSnapshot = await getDoc(userDocRef);

     if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await setDoc(userDocRef , {
                displayName,
                email,
                createAt,
                ...additionalInformation,
        });
        } catch (error) {
            console.log('error creating the user', error.mrssage);
        }
    }

    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword (auth , email , password);
  };


  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword (auth , email , password);
  };

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callBack) => 
  onAuthStateChanged(auth, callBack );


/**
 * 
 * {
 * next: callback,
 * error: errorCallback,
 * complete:  completedCallback
 * }
 * 
 */