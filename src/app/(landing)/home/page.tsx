"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { apiRequest } from "@/utils/functions";
import { User } from "@/utils/interfaces";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState({
    doctors: 0,
    patients: 0,
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      apiRequest<User[]>({ method: "GET", url: "/admin/users" })
        .then((response) => {
          setData({
            doctors: response.filter((x) => x.userRole == 1).length,
            patients: response.filter((x) => x.userRole == 2).length,
          });
        })
        .catch((error) => console.error(error));
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      {/* Content Area */}
      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Cards */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Patients</h3>
          <p className="text-gray-600">{data.patients}</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-bold">Doctors</h3>
          <p className="text-gray-600">{data.doctors}</p>
        </div>
      </main>
    </DashboardLayout>
  );
}
