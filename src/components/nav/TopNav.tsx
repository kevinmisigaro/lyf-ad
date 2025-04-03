"use client"

import { useRouter } from "next/navigation";

function TopNav() {
  const router = useRouter();

  const logout = () => {
    router.push("/");
  };

  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <button
        onClick={logout}
        className="bg-[#23a455] text-white px-4 py-2 rounded-lg hover:bg-[#1d8b47] transition"
      >
        Logout
      </button>
    </header>
  );
}

export default TopNav;