"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { apiRequest } from "@/utils/functions";
import { Specialization } from "@/utils/interfaces";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

function Page() {
  const [specializations, setSpecializations] = useState<Specialization[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const fetchData = async () => {
    try {
      setLoading(true);
      apiRequest<Specialization[]>({ method: "GET", url: "/admin/specialization" })
        .then((response) => {
            setSpecializations(response)
        })
        .catch((error) => console.error(error));
    } catch (error) {}
  };

  const columns = [
    {
      name: "Name",
      selector: (row: Specialization) => row.specializationName,
      sortable: true,
    },
    {
      name: "Swahili Name",
      selector: (row: Specialization) => row.specializationName_sw ?? "",
      sortable: true,
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-8">
        <h2 className="font-bold text-2xl mb-5">Specializations</h2>
        <DataTable columns={columns} data={specializations} pagination />
      </div>
    </DashboardLayout>
  );
}

export default Page;