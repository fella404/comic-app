import { LoginFormUI } from "@/app/components/form/login_form";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-muted/30">
      <div className="rounded-2xl p-10 shadow  max-w-md w-full flex justify-center items-center flex-col">
        <h1 className="text-center text-3xl font-bold text-black mb-2">
          IN-KOMIK
        </h1>
        <p className="text-center text-xl text-black mb-3">Welcome Back!</p>
        <LoginFormUI />
        <p className="text-gray-500">
          Don't have an account?
          <Link
            href="/register"
            className="text-blue-500 font-semibold underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
