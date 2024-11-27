"use client"; // Enables client-side components in Next.js

import EditPage from "@/components/EditPage/EditPage";

export default function page() {
  return (
    <div style={{ padding: "20px" }}>
      <EditPage />
    </div>
  );
}
