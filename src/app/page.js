import { redirect } from "next/navigation";

import UserHomePage from "./user/page";

export default function Home() {
  redirect("/signup");
}
