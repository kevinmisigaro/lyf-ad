"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { apiRequest } from "@/utils/functions";
import { User } from "@/utils/interfaces";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function Page() {
  const [patients, setPatients] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = async () => {
    try {
      setLoading(true);
      apiRequest<User[]>({ method: "GET", url: "/admin/users" })
        .then((response) => {
          setPatients(response.filter((x) => x.userRole == 2));
        })
        .catch((error) => console.error(error));
    } catch (error) {}
  };
  const router = useRouter();
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
      name: "Actions",
      cell: (row: User) => (
        <div>
          <div
            className="px-2 py-1 bg-green-400 text-white cursor-pointer"
            onClick={() => router.push(`/patients/${row.userID}`)}
          >
            View
          </div>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-8">
        <h2 className="font-bold text-2xl mb-5">Patients</h2>
        <DataTable columns={columns} data={patients} pagination />
      </div>
    </DashboardLayout>
  );
}

export default Page;