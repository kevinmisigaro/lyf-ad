"use client"

import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface SpecializationForm {
  name: string;
  swahili: string;
}

function Page() {
  const router = useRouter();
  const [specialization, setSpecialization] = useState<SpecializationForm>({
    name: "",
    swahili: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSpecialization((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/admin/save-specialization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(specialization),
      });

      if (response.ok) {
        router.push("/specializations"); // Redirect after success
      } else {
        console.error("Failed to create specialization");
      }
    } catch (error) {
      console.error("Error submitting specialization", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="flex w-full justify-between mb-5">
          <h2 className="font-bold text-2xl">Create New Specialization</h2>
          <div
            onClick={() => router.back()}
            className="bg-black text-white rounded-md px-3 py-1 cursor-pointer"
          >
            Back
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md mt-6 grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div>
            <label className="block font-medium">Specialization Name</label>
            <input
              type="text"
              name="name"
              value={specialization.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 text-gray-600"
            />
          </div>

          <div>
            <label className="block font-medium">Specialization Name (Swahili)</label>
            <input
              type="text"
              name="swahili"
              value={specialization.swahili}
              onChange={handleChange}
              required
              className="w-full border rounded px-3 py-2 text-gray-600"
            />
          </div>

          <div className="col-span-2 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Create Specialization"}
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}

export default Page;
