"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CombinedLoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

 
  const users = [
    { email: "admin@example.com", password: "admin123", role: "admin" },
    { email: "user@example.com", password: "user123", role: "user" },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (foundUser) {
      setMessage(" Login successful!");

      
      if (foundUser.role === "admin") {
        router.push("/pages/admin");
      } else {
        router.push("/pages/jobs");
      }
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Login
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
}
