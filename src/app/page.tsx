'use client'
import Main from "@/components/Home/Main";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
    <Suspense fallback={<div>Loading...</div>}>
      <Main />
    </Suspense>
    </div>
  );
}
