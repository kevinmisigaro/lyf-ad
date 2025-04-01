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
        <h2 className="font-bold text-2xl mb-5">Hospitals</h2>
        <DataTable columns={columns} data={hospitals} pagination />
      </div>
    </DashboardLayout>
  );
}

export default Page;