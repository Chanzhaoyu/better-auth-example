import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { signUp } from "../lib/auth-client";

export const Route = createFileRoute("/register")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await signUp.email(
      { email, password, name, roles: ["STUDENT"] },
      {
        onSuccess: () => {
          navigate({ to: "/" });
        },
        onError: (error) => {
          console.error(error);
        },
      }
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Register</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="input block" htmlFor="email">
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input block" htmlFor="password">
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label className="input block" htmlFor="name">
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="input block" htmlFor="confirmPassword">
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button className="btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
