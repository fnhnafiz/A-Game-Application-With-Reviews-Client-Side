import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";
// import toast from "react-hot-toast";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // console.log(user);
  const [loading, setLoading] = useState(true);
  // const [watchList, setWatchList] = useState([]);
  // console.log(watchList);

  // console.log(watchList);
  const provider = new GoogleAuthProvider();

  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleCreateUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleRegisterGoggle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  const manageProfile = (name, photo) => {
    // console.log("profile Update");
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const handleLogOut = () => {
    setLoading(true);
    setUser(null);
    // toast.error("Sign Out");
    return signOut(auth);
  };

  const userInfo = {
    user,
    setUser,
    loading,
    setLoading,
    handleCreateUser,
    handleRegisterGoggle,
    manageProfile,
    handleLogOut,
    handleSignIn,
    theme,
    changeTheme,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
