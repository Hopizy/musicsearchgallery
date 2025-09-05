import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const signUp = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div className="flex flex-col gap-2 p-4">
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={signUp}>Sign Up</button>
      <button onClick={login}>Log In</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

