import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { signOut, useSession } from "../lib/auth-client";

export const Route = createRootRoute({
  component: RouteComponent,
});

function RouteComponent() {
  const { data: session } = useSession();

  return (
    <>
      <div className="p-2 flex items-center gap-4">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        {session ? (
          <button className="btn" onClick={() => signOut()}>
            Sign Out
          </button>
        ) : (
          <>
            <Link className="btn" to="/login">
              Login
            </Link>{" "}
            <Link className="btn" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
