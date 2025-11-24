"use client";

import { RegisterFormUI } from "@/app/components/form/register_from";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  // const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <div className="rounded-2xl p-10 shadow  max-w-md w-full flex justify-center items-center flex-col">
        <h1 className="text-center text-2xl font-bold text-black mb-2">
          IN-KOMIK
        </h1>
        <p className="text-gray-500">Create your account to start reading</p>
        <RegisterFormUI />
        <p className="text-gray-500">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
