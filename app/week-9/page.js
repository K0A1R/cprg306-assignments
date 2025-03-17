//Landing Page
"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    await gitHubSignIn();
  };

  const handleSignOut = async () => {
    await firebaseSignOut();
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl mb-10 text-slate-800 font-semibold">
        Welcome to Shopping List App
      </h1>
      {user ? (
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-xl">
            Welcome, {user.displayName} ({user.email})
          </h2>
          <div className="flex gap-2">
            <button
              className="hover:underline hover:text-green-500 font-semibold"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
            <p>|</p>
            <Link
              href="../week-9/shopping-list"
              className="hover:underline hover:text-green-500 font-semibold"
            >
              Go To App
            </Link>
          </div>
        </div>
      ) : (
        <button
          className="hover:underline hover:text-green-500 font-semibold"
          onClick={handleSignIn}
        >
          Sign In with GitHub
        </button>
      )}
    </main>
  );
}
