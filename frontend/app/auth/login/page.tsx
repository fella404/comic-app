export default function Login() {
  return (
    <div className="min-h-screen bg-[#0f1825] flex items-center justify-center p-4">
      <div className="bg-[#141e2f] p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-center text-2xl font-bold text-white mb-2">
          IN-KOMIK
        </h1>
        <p className="text-center text-lg text-white mb-8">Welcome Back!</p>

        <label className="text-white text-sm">Email</label>
        <div className="mt-1 mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none"
          />
        </div>

        <label className="text-white text-sm">Password</label>
        <div className="mt-1 mb-6">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-600 text-white focus:outline-none"
          />
        </div>

        <button className="w-full bg-[#ff6b6b] hover:bg-[#ff5a5a] transition p-3 rounded-lg text-white font-semibold mb-4">
          Login
        </button>

        <p className="text-center text-white text-sm">
          Don't have an account?{" "}
          <a className="text-[#ff6b6b] cursor-pointer">Register</a>
        </p>
      </div>
    </div>
  );
}
