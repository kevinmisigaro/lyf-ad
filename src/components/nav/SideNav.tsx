import React from 'react'

function SideNav() {
  return (
    <aside className="w-64 bg-[#23a455] text-white p-5">
    <h2 className="text-2xl font-bold">LyfPlus Admin</h2>
    <nav className="mt-5">
      <ul>
        <li className="mb-2"><a href="/home" className="block p-2 hover:bg-[#1d8b47] rounded">Home</a></li>
        <li className="mb-2"><a href="/patients" className="block p-2 hover:bg-[#1d8b47] rounded">Patients</a></li>
        <li className="mb-2"><a href="/doctors" className="block p-2 hover:bg-[#1d8b47] rounded">Doctors</a></li>
        <li className="mb-2"><a href="/hospitals" className="block p-2 hover:bg-[#1d8b47] rounded">Hospitals</a></li>
      </ul>
    </nav>
  </aside>
  )
}

export default SideNav