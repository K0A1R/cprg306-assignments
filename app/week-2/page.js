import StudentInfo from "./student-info.js";
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>Shopping List</h1>
      <StudentInfo />
      <Link href="/">Home</Link>
    </main>
  );
}
