import { createFileRoute } from "@tanstack/react-router";
import { useSession } from "../lib/auth-client";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { data: session } = useSession();

  return (
    <div className="p-4">
      <h3 className="mb-4 font-bold text-2xl">Welcome Home!</h3>
      {session && <div>Hello {session?.user?.name}</div>}
    </div>
  );
}
