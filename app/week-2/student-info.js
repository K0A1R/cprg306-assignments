import Link from "next/link";
export default function StudentInfo() {
  return (
    <section>
      <p>Amrit Reddy</p>
      <Link
        href="https://github.com/K0A1R/cprg306-assignments"
        className="hover:underline hover:text-green-400"
      >
        GitHub Repository
      </Link>
    </section>
  );
}
