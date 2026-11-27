export const instant = false;
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/auth/login");
  }

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-3xl font-bold">
        Welcome to Nepal EDU Hub!
      </h1>

      <p className="mt-4 text-muted-foreground">
        You are successfully logged in.
      </p>

      <p className="mt-2 text-sm">
        Email: {user.email}
      </p>
    </main>
  );
}

