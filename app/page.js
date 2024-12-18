import Link from "next/link";
export default function Page() {
  return (
    <main className="bg-black h-screen p-24">
      <h1 className="text-white text-4xl font-bold mb-5">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <nav className="text-lg">
        <Link
          href="./week-2"
          className="block text-white hover:text-green-400 hover:underline"
        >
          Week 2 Assignment
        </Link>
        <Link
          href="./week-3"
          className="block text-white hover:text-green-400 hover:underline"
        >
          Week 3 Assignment
        </Link>
        <Link
          href="./week-4"
          className="block text-white hover:text-green-400 hover:underline"
        >
          Week 4 Assignment
        </Link>
        <Link
          href="./week-5"
          className="block text-white hover:text-green-400 hover:underline"
        >
          Week 5 Assignment
        </Link>
        <Link
          href="week-6"
          className="block text-white hover:text-green-400 hover:underline"
        >
          Week 6 Assignment
        </Link>
        <Link
          href="./week-7"
          className="block text-white hover:text-green-400 hover:underline"
        >
          Week 7 Assignment
        </Link>
        <Link
          href="./week-8"
          className="block text-white hover:text-green-400 hover:underline"
        >
          Week 8 Assignment
        </Link>
        <Link
          href="./week-9"
          className="block text-white hover:text-green-400 hover:underline"
        >
          Week 9 Assignment
        </Link>
        <Link
          href="./week-10"
          className="block text-white hover:text-green-400 hover:underline"
        >
          Week 10 Assignment
        </Link>
      </nav>
    </main>
  );
}
