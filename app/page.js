import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav className="flex flex-col">
        <Link className="hover:underline" href="/week-2">
          Week 2
        </Link>
        <Link className="hover:underline" href="/week-3">
          Week 3
        </Link>
      </nav>
    </main>
  );
}
