"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { apiRequest } from "@/utils/functions";
import { Hospital } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function Page() {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = async () => {
    try {
      setLoading(true);
      apiRequest<Hospital[]>({ method: "GET", url: "/admin/hospital" })
        .then((response) => {
          setHospitals(response);
        })
        .catch((error) => console.error(error));
    } catch (error) {}
  };

  const columns = [
    {
      name: "Name",
      selector: (row: Hospital) => row.areaOfSpecialization,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row: Hospital) => row.address,
      sortable: true,
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex w-full justify-between mb-5">
          <h2 className="font-bold text-2xl">Hospitals</h2>
          <a href="/hospitals/new" className="px-8 py-2 bg-blue-500 text-white rounded-md">New</a>
        </div>
        <DataTable columns={columns} data={hospitals} pagination />
      </div>
    </DashboardLayout>
  );
}

export default Page;