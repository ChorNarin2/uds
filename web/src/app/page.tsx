import ECommerce from "@/components/Dashboard/dashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | Uni - Next.js Dashboard Template",
  description: "This is Next.js Home for uni Dashboard Template",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <ECommerce />
      </DefaultLayout>
      
    </>
  );
}
