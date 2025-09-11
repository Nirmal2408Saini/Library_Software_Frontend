import { Book, LogOut, User } from "lucide-react";

export default function UserDashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-blue-700">
          📚 Andaman Library
        </div>
        <nav className="flex-1 p-4 space-y-3">
          <a className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <Book size={20} /> My Books
          </a>
          <a className="flex items-center gap-2 p-2 rounded hover:bg-blue-700 cursor-pointer">
            <User size={20} /> Profile
          </a>
        </nav>
        <button className="m-4 flex items-center gap-2 bg-red-600 px-3 py-2 rounded hover:bg-red-500">
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">Welcome, Student 👋</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-lg mb-2">Books Borrowed</h2>
            <p className="text-gray-600">3 Active Loans</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-lg mb-2">Due This Week</h2>
            <p className="text-gray-600">“Data Science 101” - 14 Sep</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="font-semibold text-lg mb-2">Library News</h2>
            <p className="text-gray-600">New arrivals in Computer Science!</p>
          </div>
        </div>
      </main>
    </div>
  );
}
