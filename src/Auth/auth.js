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
    const handleAuthStateChanged = async (_authUser) => {
      if (_authUser) {
        const token = await _authUser.getIdToken(true);
        // Create a shallow copy and extend the _authUser with the token
        setAuthUser({
          ..._authUser,
          jwt: token,
        });
      } else if (!isFirst) {
        setAuthUser(null);
      }
      setIsFirst(false);
    };

    const unlisten = auth.onAuthStateChanged(handleAuthStateChanged);

    return () => {
      unlisten();
    };
  }, [isFirst]); // Added isFirst to the dependency array since it's used inside the useEffect

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
