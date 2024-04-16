export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col-reverse desktop:flex-row h-[100vh] justify-end desktop:pl-10">
      {children}
    </main>
  );
}
