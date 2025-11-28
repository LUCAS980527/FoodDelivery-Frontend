import { redirect } from "next/navigation";
import AdminPage from "./admin/page";

export default function Home() {
  return (
    <div>
      <AdminPage />
    </div>
  );

  redirect("/signup");
}
