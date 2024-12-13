import "./globals.css";

export const metadata = {
  title: "Shopping List",
  description: "Create shopping list and get recipe recommendations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-950">{children}</body>
    </html>
  );
}
