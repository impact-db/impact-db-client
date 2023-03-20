import { useEffect, useState } from "react";
import {
  provider,
  getAuth,
  signInWithPopup,
  signOut,
} from "../../config/firebase";

const auth = getAuth();

function loginPopup() {
  signInWithPopup(auth, provider)
    .then((_result) => {
      // console.log(_result)
    })
    .catch((error) => {
      console.log(error);
    });
}

const useFirebaseAuthentication = () => {
  const [authUser, setAuthUser] = useState(null);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged((_authUser) => {
      if (_authUser) {
        setAuthUser(_authUser);
      } else if (!isFirst) {
        setAuthUser(null);
      }
      setIsFirst(false);
    });
    return () => {
      unlisten();
    };
  }, []);

  return authUser;
};

function signUserOut() {
  signOut(auth)
    .then(() => {
      location.reload();
    })
    .catch((error) => {
      console.log(error);
    });
}

export { loginPopup, useFirebaseAuthentication, signUserOut };
