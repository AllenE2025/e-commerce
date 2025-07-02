import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-black to-purple-700 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-purple-300">TechnoBitz</span>
        </h1>
        <p className="text-purple-100 mb-8 text-lg">
          Empowering your tech journey.
        </p>
        <div className="flex flex-col gap-4">
          <Link href="/login">
            <button className="bg-white text-purple-700 font-semibold py-2 px-6 rounded-full hover:bg-purple-100 transition duration-300 shadow">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-purple-600 text-white font-semibold py-2 px-6 rounded-full hover:bg-purple-700 transition duration-300 shadow">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
