"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const login = async () => {
    await gitHubSignIn();
  };

  const logout = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="flex flex-col bg-slate-950 h-screen text-white justify-center items-center">
      <h1 className="text-6xl mb-10">Shopping List Log-In Page</h1>
      <div>
        {user ? (
          <div className="flex flex-col items-center">
            <p className="text-xl">Welcome, {user.displayName}!</p>
            <div className="flex gap-2">
              <button className="hover:text-green-400" onClick={logout}>
                Log Out
              </button>
              <p>|</p>
              <Link
                className="hover:text-green-400"
                href="../week-10/shopping-list"
              >
                Shopping List
              </Link>
            </div>
          </div>
        ) : (
          <button className="hover:text-green-400" onClick={login}>
            Log In with GitHub
          </button>
        )}
      </div>
    </main>
  );
}
