"use client"

import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  // Loading state while the session is being determined
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  // If a session is available, display user info
  return (
    <div>
      <p>Welcome, {session?.user?.name || "User"}!</p>
      {/* Optionally, display the email */}
      <p>Email: {session?.user?.email}</p>
      <p>number: {session?.user?.number}</p>
      <p>id: {session?.user?.id}</p>

      <button onClick={()=>{signOut()}}>signout</button>
    </div>
  );
}