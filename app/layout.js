import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "Generated by Amrit Reddy",
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-slate-100" lang="en">
      <body>{children}</body>
    </html>
  );
}
