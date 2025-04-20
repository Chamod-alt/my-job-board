"use client";

import { useState, useEffect } from "react";

export default function AdminPage() {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({ title: "", company: "", location: "", type: "", description: "" });

  useEffect(() => {
    fetch("/api/jobs").then(res => res.json()).then(setJobs);
  }, []);

  const handleAddJob = async (e) => {
    e.preventDefault();
    await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setForm({ title: "", company: "", location: "", type: "", description: "" });
    const updated = await fetch("/api/jobs").then(res => res.json());
    setJobs(updated);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/jobs/${id}`, { method: "DELETE" });
    setJobs(jobs.filter(job => job.id !== id));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <form onSubmit={handleAddJob} className="grid grid-cols-1 gap-3 mb-6 bg-white p-4 rounded shadow">
        {["title", "company", "location", "type", "description"].map((field) => (
          <input key={field} placeholder={field} value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })} className="p-2 border rounded" required />
        ))}
        <button className="bg-green-600 text-white py-2 rounded">Add Job</button>
      </form>

      <div className="grid gap-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white p-4 rounded shadow flex justify-between">
            <div>
              <h2 className="text-lg font-semibold">{job.title}</h2>
              <p>{job.company} - {job.location}</p>
            </div>
            <button onClick={() => handleDelete(job.id)} className="text-red-500 hover:underline">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
