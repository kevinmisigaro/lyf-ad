"use client";

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { apiRequest } from "@/utils/functions";
import { User } from "@/utils/interfaces";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const params = useParams(); // ✅ Use useParams to fetch the params safely
  const [patient, setPatient] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    if (!params || !params.number) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiRequest<User>({
          method: "POST",
          url: `/admin/getUser/${params.number}`,
        });

        setPatient(response);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.number]); // ✅ Ensure it runs when params.number changes

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">
            Patient profile:{" "}
            <span className="font-medium">
              {patient?.firstName} {patient?.lastName}
            </span>
          </h2>

          <div
            onClick={() => router.back()}
            className="bg-black text-white rounded-md px-3 py-1 cursor-pointer"
          >
            Back
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block font-medium">First Name</label>
            <input
              type="text"
              value={patient?.firstName || ""}
              readOnly
              className="w-full border rounded px-3 py-2 mb-4 text-gray-600"
            />
          </div>
          <div>
            <label className="block font-medium">Last Name</label>
            <input
              type="text"
              value={patient?.lastName || ""}
              readOnly
              className="w-full border rounded px-3 py-2 mb-4 text-gray-600"
            />
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              type="text"
              value={patient?.email || ""}
              readOnly
              className="w-full border rounded px-3 py-2 mb-4 text-gray-600"
            />
          </div>

          <div>
            <label className="block font-medium">Phone</label>
            <input
              type="text"
              value={patient?.phone || ""}
              readOnly
              className="w-full border rounded px-3 py-2 mb-4 text-gray-600"
            />
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
}

export default Page;