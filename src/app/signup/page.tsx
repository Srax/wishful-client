"use client";
import { Button } from "@/components/Button.component";
import InputBox from "@/components/InputBox.component";
import { BACKEND_URL } from "@/lib/Constants";
import Link from "next/link";
import React, { useRef } from "react";

type FormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUpPage = () => {
  const data = useRef<FormInputs>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const register = async () => {
    const res = await fetch(BACKEND_URL + "/auth/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        firstName: data.current.firstName,
        lastName: data.current.lastName,
        email: data.current.email,
        password: data.current.password,
      }),
    });

    // An error ocurred
    if (!res.ok) {
      const response = await res.json();
      if (response.error) alert(response.error.message);
      return;
    }

    const response = await res.json();
    alert("User Registered!");
  };

  return (
    <div className="m-2 border rounded overflow-hidden shadow">
      <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-slate-600">
        Sign up
      </div>
      <div className="p-2 flex flex-col gap-6">
        <InputBox
          autoComplete="off"
          name="firstName"
          labelText="Firstname"
          required
          onChange={(e) => (data.current.firstName = e.target.value)}
        />
        <InputBox
          autoComplete="off"
          name="lastName"
          labelText="Lastname"
          required
          onChange={(e) => (data.current.lastName = e.target.value)}
        />
        <InputBox
          name="email"
          labelText="Email"
          required
          onChange={(e) => (data.current.email = e.target.value)}
        />
        <InputBox
          name="password"
          labelText="password"
          type="password"
          required
          onChange={(e) => (data.current.password = e.target.value)}
        />
        <div className="flex justify-center items-center gap-2">
          <Button onClick={register}>Submit</Button>
          <Link className="" href={"/"}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
