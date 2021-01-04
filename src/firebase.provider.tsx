import React, { ReactElement, createContext } from "react";
import firebase from "firebase";

import { firebaseConfig } from "./config/firebase.config";

interface Props {
  children: React.ReactNode;
}

export const FirebaseContext: React.Context<{
  db: firebase.firestore.Firestore | null;
}> = createContext({
  db: null,
});

firebase.initializeApp(firebaseConfig);

function FirebaseProvider({ children }: Props): ReactElement {
  const ctx = { db: firebase.firestore() };
  return (
    <FirebaseContext.Provider value={ctx}>{children}</FirebaseContext.Provider>
  );
}

export default FirebaseProvider;
