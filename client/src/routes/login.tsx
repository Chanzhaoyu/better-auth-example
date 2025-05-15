import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { signIn } from "../lib/auth-client";
import { useState } from "react";

export const Route = createFileRoute("/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn.email(
      { email, password },
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

  const handleGoogleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn.social(
      { provider: "google" },
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

  const handleGithubLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await signIn.social(
      { provider: "github" },
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
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <form className="space-y-4" onSubmit={handleEmailLogin}>
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
        <button className="btn" type="submit">
          Login
        </button>
      </form>

      <form className="mt-4" onSubmit={handleGoogleLogin}>
        <button className="btn" type="submit">
          Login with Google
        </button>
      </form>

      <form className="mt-4" onSubmit={handleGithubLogin}>
        <button className="btn" type="submit">
          Login with Github
        </button>
      </form>
    </div>
  );
}
