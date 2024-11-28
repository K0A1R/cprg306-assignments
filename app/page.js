import Link from "next/link";
export default function Page() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <Link href="./week-2" className="block">
          Week 2
        </Link>
        <Link href="./week-3" className="block">
          Week 3
        </Link>
      </nav>
    </main>
  );
}
