"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { apiRequest } from "@/utils/functions";
import { User } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const Page: React.FC = () => {
  const [doctors, setDoctors] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await apiRequest<User[]>({ method: "GET", url: "/admin/users" });
        setDoctors(response.filter((user) => user.userRole === 1));
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      name: "Name",
      selector: (row: User) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row: User) => row.phone,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: User) => row.email,
      sortable: true,
    },
    {
      name: "Verification",
      selector: (row: User) => row.doctorsIDverificationStatus,
    },
    {
      name: "Actions",
      cell: (row: User) =>  <div>
      <div className="px-2 py-1 bg-green-400 text-white cursor-pointer" onClick={() => router.push(`/doctors/${row.userID}`)}>View</div>
    </div>
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h2 className="font-bold text-2xl mb-5">Doctors</h2>
        <DataTable
          columns={columns}
          data={doctors}
          pagination
          className="border border-gray-200 rounded-lg"
        />
      </div>
    </DashboardLayout>
  );
};

export default Page;
