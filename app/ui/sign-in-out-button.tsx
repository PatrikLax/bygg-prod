"use client";

import { redirect } from "next/navigation";
import { useSession, signIn, signOut } from "../lib/auth-client";

export default function SignInOutButton() {
  const session = useSession();

  if (session.data) {
    return (
      <div className="flex align-middle gap-3">
        <button>{session.data.user.name}</button>
        <img
          className="h-10 w-10 rounded-full"
          src={session.data.user.image!}
        ></img>
        <button onClick={() => signOut()}>Sign Out</button>
        <button onClick={() => redirect("/dashboard")}>Dash</button>
      </div>
    );
  }

  return (
    <button
      onClick={() =>
        signIn.social({ provider: "github", callbackURL: "/dashboard" })
      }
    >
      Sign in
    </button>
  );
}
