import { createContext, useState, useEffect} from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";
// as the actual value you want to access
export const UserContext = createContext({
  setCurrenttUser: () => null,
  currentUser: null,
});



export const UserProvider = ({children}) => {
    const [currentUser, setCurrenttUser] = useState(null);
    const value = { currentUser, setCurrenttUser};


useEffect(() => {
  const unsubscribe = onAuthStateChangedListener((user) => {
    if(user){
      createUserDocumentFromAuth(user);
    }
    setCurrenttUser(user);
});

return unsubscribe;
}, []);

return <UserContext.Provider value={value}>{children}</UserContext.Provider>

};