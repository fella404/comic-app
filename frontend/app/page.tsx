import Image from "next/image";
import Login from "./auth/login/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Login/>
    </div>
  );
}
