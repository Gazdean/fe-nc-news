import { createContext, useState } from "react";

export const SignedInContext = createContext()

export const SignedInProvider = ({ children }) => {
    const [signedIn, setSignedIn] = useState([])

    return (
      <SignedInContext.Provider value={{ signedIn, setSignedIn}}>
        {children}
      </SignedInContext.Provider>
    );
  };