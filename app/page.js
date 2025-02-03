import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-xl">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <nav className="flex flex-col">
        <Link
          className="hover:underline hover:text-blue-600 font-semibold"
          href="/week-2"
        >
          Week 2 Assignment
        </Link>
        <Link
          className="hover:underline hover:text-blue-600 font-semibold"
          href="/week-3"
        >
          Week 3 Assignment
        </Link>
        <Link
          className="hover:underline hover:text-blue-600 font-semibold"
          href="/week-4"
        >
          Week 4 Assignment
        </Link>
      </nav>
    </main>
  );
}
