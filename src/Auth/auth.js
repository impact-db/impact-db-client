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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unlisten = auth.onAuthStateChanged(async (_authUser) => {
      setLoading(true);
      if (_authUser) {
        setAuthUser(_authUser);
        _authUser.email=_authUser.email;
        // Get JWT token
        const token = await _authUser.getIdToken(true);
        _authUser.jwt = token;
      } else if (!isFirst) {
        setAuthUser(null);
        setEmail(null);
        setJwt(null);
      }
      setIsFirst(false);
      setLoading(false);  // Set loading to false
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
