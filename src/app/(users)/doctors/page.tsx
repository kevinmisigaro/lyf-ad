"use client"

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { apiRequest } from "@/utils/functions";
import { User } from "@/utils/interfaces";
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
          setPatients(response.filter((x) => x.userRole == 1));
        })
        .catch((error) => console.error(error));
    } catch (error) {}
  };

  const columns = [
    {
      name: 'Name',
      selector: (row: User) => `${row.firstName} ${row.lastName}`,
      sortable: true,
    },
    {
      name: 'Phone',
      selector: (row: User) => row.phone,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row: User) => row.email,
      sortable: true,
    },
    {
        name: 'Verification',
        selector: (row: User) => row.doctorsIDverificationStatus
    }
  ]

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-8">
        <h2 className="font-bold text-2xl mb-5">Doctors</h2>
        <DataTable
          columns={columns}
          data={patients}
          pagination
        />
      </div>
    </DashboardLayout>
  );
}

export default Page;