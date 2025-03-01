import Link from "next/link";

export default function Page() {
  const weeks = [2, 3, 4, 5, 6, 7];
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="font-bold text-xl">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <nav className="flex flex-col">
        <ul>
          {weeks.map((week) => (
            <li
              key={week}
              className="hover:underline hover:text-blue-600 font-semibold"
            >
              <Link href={`/week-${week}`}>Week {week} Assignment</Link>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
