import Link from "next/link";

export default function Login() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-black to-purple-700 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 w-full max-w-sm text-white">
        <h1 className="text-center text-4xl font-bold mb-2">
          Welcome to <span className="text-purple-300">TechnoBitz</span>
        </h1>
        <p className="text-center text-purple-100 mb-8 text-lg">Please log in to continue</p>

        <form className="flex flex-col gap-5">
          <input
            name="username"
            placeholder="Username"
            className="rounded-md p-3 bg-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="rounded-md p-3 bg-white/20 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-full transition duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-purple-200">
          Don’t have an account?{' '}
          <Link href="/signup" className="underline text-purple-100 hover:text-white">
            Sign up here
          </Link>
        </p>

        <p className="mt-2 text-center text-xs text-purple-300">
          <Link href="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
