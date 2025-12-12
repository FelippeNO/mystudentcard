import { Suspense } from "react";
import StudentPage from "./student-page";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <StudentPage />
    </Suspense>
  );
}
