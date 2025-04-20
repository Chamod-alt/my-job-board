// pages/jobs.js

"use client";
import { useEffect, useState } from "react";

export default function JobsPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("/api/jobs")
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Job Listings</h1>
      <div className="grid gap-4">
        {jobs.map(job => (
          <div key={job.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company} - {job.location}</p>
            <p className="text-sm text-blue-600">{job.type}</p>
            <p className="mt-2">{job.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
