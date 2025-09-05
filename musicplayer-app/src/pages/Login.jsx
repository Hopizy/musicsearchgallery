import { signInWithGoogle } from "../firebase";

export default function Login() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">Login</h2>

      {/* Google login button */}
      <button
        onClick={signInWithGoogle}
        className="bg-red-500 text-blue px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Sign in with Google
      </button>
    </div>
  );
}
