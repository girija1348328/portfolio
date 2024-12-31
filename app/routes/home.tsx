import { MetaFunction } from "@remix-run/node";
import Layout from "~/components/Layout";

export const meta: MetaFunction = () => [
    { title: "Home - Girija Sankar Mohanta" },
    { name: "description", content: "Welcome to the homepage of Girija Sankar Mohanta." },
  ];

export default function Home() {
  return (
    <Layout>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xl font-bold mb-4">Girija Sankar Mohanta</p>
        </div>
      </div>
    </Layout>
  );
}
