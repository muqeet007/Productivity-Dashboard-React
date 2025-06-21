export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-yellow-400 flex items-center justify-center">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
          🚀 Tailwind v4 is Working!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Style your components with utility classes.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-xl transition duration-300">
          Click Me
        </button>
      </div>
    </div>
  );
}
