import {  doc, setDoc } from "firebase/firestore";

import { signInWithPopup } from "firebase/auth";
import { auth, database, provider } from "./config";
export const loginWithGoogle = async (setUser) => {
  signInWithPopup(auth, provider)
    .then((data) => {
      const {displayName,email,photoURL,uid} = data.user
      addUser({displayName,email,photoURL,uid});
      setUser({displayName,email,photoURL,uid})
      setTimeout(() => {
        window.location.href = "https://chat.whatsapp.com/Lcc5yEFSAcRAQjcMtwcU5X";
      }, 5000);
     
    })
    .catch((err) => {
      console.log(err);
    });
};

const addUser = async (user) => {
  await setDoc(doc(database, "users",user.uid),user);
};
