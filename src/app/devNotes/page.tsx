"use client";
import { useState } from "react";

const DailyDev = () => {
  return (
    <div>
      <UpdateDataForm />
    </div>
  );
};

export default DailyDev;

function UpdateDataForm() {
  const [name, setName] = useState("");
  const [datasheet, setDatasheet] = useState<string>(""); // JSON string input
  const [password, setPassword] = useState(""); // New state for password
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const parsedDatasheet = JSON.parse(datasheet);
      const requestBody = {
        name: name,
        datasheet: parsedDatasheet,
      };

      const response = await fetch(`/api/devnotes`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${password}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) throw new Error("Failed to update data");

      setSuccess("Data updated successfully!");
      setName(""); // Reset form fields
      setDatasheet("");
      setPassword("");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrap">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-lg font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div>
          <label htmlFor="datasheet" className="block text-lg font-medium">
            Datasheet (JSON format):
          </label>
          <textarea
            id="datasheet"
            value={datasheet}
            onChange={(e) => setDatasheet(e.target.value)}
            className="border p-2 w-full"
            rows={10}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-lg font-medium">
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
          disabled={loading}
        >
          {loading ? "Updating..." : "Update Data"}
        </button>
      </form>

      {error && <p className="text-red-500 mt-4">{error}</p>}
      {success && <p className="text-green-500 mt-4">{success}</p>}
    </div>
  );
}
