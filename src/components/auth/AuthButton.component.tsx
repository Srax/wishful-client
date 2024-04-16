"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
const AuthButton = () => {
  const { data: session } = useSession();

  // If we have a session with a user
  // TODO: Extend the default session to have firstName, lastName etc
  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className=" text-sky-600">
          {session.user.firstName} {session.user.lastName}
        </p>
        <Link
          href={"/api/auth/signout"}
          className="flex gap-4 ml-auto text-red-600"
        >
          Log Out
        </Link>
      </div>
    );
  }
  return (
    <div className="flex gap-4 ml-auto items-center">
      <Link
        href={"/api/auth/signin"}
        className="flex gap-4 ml-auto text-green-600"
      >
        Log in
      </Link>
      <Link
        href={"/signup"}
        className="flex gap-4 ml-auto bg-green-600 text-green-200 p-2 rounded"
      >
        Signup
      </Link>
    </div>
  );
};

export default AuthButton;
